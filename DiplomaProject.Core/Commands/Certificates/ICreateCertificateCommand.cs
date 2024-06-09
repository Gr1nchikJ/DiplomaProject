using DiplomaProject.Core.Model.Certificate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Commands.Certificate
{
    public interface ICreateCertificateCommand
    {
        Task<CertificateModel> ExecuteAsync(CreateCertificateModel createCertificateModel);
    }
}
