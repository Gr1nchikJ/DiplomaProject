using DiplomaProject.Core.Model.Certificate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Queries
{
    public interface IDeleteCertificateCommand
    {
        public Task<bool> ExecuteAsync(Guid id);
    }
}
