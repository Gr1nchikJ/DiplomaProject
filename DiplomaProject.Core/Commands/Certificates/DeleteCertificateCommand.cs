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
    public class DeleteCertificateCommand : IDeleteCertificateCommand
    {
        public readonly ApplicationDbContext applicationDbContext;
        public DeleteCertificateCommand(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public async Task<bool> ExecuteAsync(Guid id)
        {
            var certificate = await applicationDbContext.Certificates
                .Include(x => x.Address)
                .SingleOrDefaultAsync(c => c.Id == id);

            if (certificate == null) {
                return false;
            }

            applicationDbContext.Certificates.Remove(certificate);

            await applicationDbContext.SaveChangesAsync();

            return true;
        }
}
}
