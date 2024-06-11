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
    public class GetAllCertificatesQuery : IGetAllCertificatesQuery
    {
        public readonly ApplicationDbContext applicationDbContext;
        public GetAllCertificatesQuery(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public async Task<IList<CertificateModel>> ExecuteAsync()
        {

            var allCertificates = await applicationDbContext.Certificates
                .Include(x => x.Address)
                .Include(c => c.ContactInfo)
                .ToListAsync();

            IList<CertificateModel> result = new List<CertificateModel>();

            foreach (var certificate in allCertificates)
            {
                var certificateModel = new CertificateModel()
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

                result.Add(certificateModel);
            };

            return result;
        }
    }
}
