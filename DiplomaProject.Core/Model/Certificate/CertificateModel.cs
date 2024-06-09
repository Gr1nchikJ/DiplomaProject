using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Model.Certificate
{
    public class CertificateModel : ICertificateModel
    {
        public Guid Id { get; set; }

        public string AuthorityName { get; set; }

        public string AuthoritytIdentifier { get; set; }

        public string EntityName { get; set; }

        public string EntityIdentifier { get; set; }

        public string Name { get; set; }
    }
}
