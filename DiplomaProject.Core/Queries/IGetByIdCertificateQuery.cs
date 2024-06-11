using DiplomaProject.Core.Model.Certificate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Queries
{
    public interface IGetByIdCertificateQuery
    {
        public Task<CertificateModel> ExecuteAsync(Guid id);
    }
}
