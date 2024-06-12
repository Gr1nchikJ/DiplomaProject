using DiplomaProject.Core.Commands.Certificate;
using DiplomaProject.Core.Model.Certificate;
using Microsoft.EntityFrameworkCore;
using DiplomaProject.Data.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Commands.Certificates
{
    public class CreateCertificateCommand : ICreateCertificateCommand
    {
        private readonly ApplicationDbContext applicationDbContext;

        public CreateCertificateCommand(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public async Task<CertificateModel> ExecuteAsync(CreateCertificateModel createCertificateModel)
        {
            Address certificateAddress = new Address() { };

            var createdAddress = await applicationDbContext.Addresses.AddAsync(certificateAddress);

            ContactInfo contactInfo = new ContactInfo() { };

            var createContactInfo = await applicationDbContext.Contacts.AddAsync(contactInfo);

            Data.Data.Certificate certificateToAdd = new Data.Data.Certificate(){ UserId = createCertificateModel.UserId.ToString(), AddressId = createdAddress.Entity.Id, ContactInfoId = createContactInfo.Entity.Id };

            var createdCertificate = await applicationDbContext.Certificates.AddAsync(certificateToAdd);

            await applicationDbContext.SaveChangesAsync();

            var certificate = await applicationDbContext.Certificates.Where(x => x.Id == createdCertificate.Entity.Id).FirstOrDefaultAsync();

            var result = new CertificateModel()
            {
                Id = certificate.Id,
                UserId = certificate.UserId,
                CertificateName = certificate.CertificateName,
                AuthorityName = certificate.AuthorityName,
                AuthoritytIdentifier = certificate.AuthoritytIdentifier,
                EntityName = certificate.EntityName,
                EntityIdentifier = certificate.EntityIdentifier,
                Name = certificate.Name,
                AddressPostCode = certificate.Address.AddressPostCode,
                Country = certificate.Address.Country,
                Region = certificate.Address.Region,
                District = certificate.Address.District,
                City = certificate.Address.City,
                Street = certificate.Address.Street,
                BlockName = certificate.Address.BlockName,
                ContactEmail = certificate.ContactInfo.ContactEmail,
                ContactName = certificate.ContactInfo.ContactName,
                ContactNumber = certificate.ContactInfo.ContactNumber,
                Comments = certificate.Comments,
                IsApprovedByAdmin = certificate.IsApprovedByAdmin,
                IsPublishedToBlockchain = certificate.IsPublishedToBlockchain,
            };

            return result;
        }
    }
}
