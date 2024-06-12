using DiplomaProject.Core.Model.Certificate;
using DiplomaProject.Data.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Queries
{
    public class GetByIdCertificateQuery : IGetByIdCertificateQuery
    {
        public readonly ApplicationDbContext applicationDbContext;
        public GetByIdCertificateQuery(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public async Task<CertificateModel> ExecuteAsync(Guid id)
        {

            var certificate = await applicationDbContext.Certificates
                .Include(x => x.Address)
                .Include(c => c.ContactInfo)
                .SingleOrDefaultAsync(c => c.Id == id);

            if (certificate == null) {
                return null;
            }

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
