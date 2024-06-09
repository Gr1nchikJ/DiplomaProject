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
            var certificate = new Data.Data.Certificate(){ };

            var createdCertificate = await applicationDbContext.Certificates.AddAsync(certificate);

            await applicationDbContext.SaveChangesAsync();

            var fetchedCertificate = await applicationDbContext.Certificates.Where(x => x.Id == createdCertificate.Entity.Id).FirstOrDefaultAsync();

            var result = new CertificateModel()
            {
                Id = fetchedCertificate.Id,
                AuthorityName = fetchedCertificate.AuthorityName,
                AuthoritytIdentifier = fetchedCertificate.AuthoritytIdentifier,
                EntityName = fetchedCertificate.EntityName,
                EntityIdentifier = fetchedCertificate.EntityIdentifier,
                Name = fetchedCertificate.Name,
            };

            return result;
        }
    }
}
