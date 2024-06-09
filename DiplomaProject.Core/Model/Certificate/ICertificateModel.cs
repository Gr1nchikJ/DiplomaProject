using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DiplomaProject.Core.Model.Certificate
{
    public interface ICertificateModel
    {
        public Guid Id { get; set; }

        public string AuthorityName { get; set; }

        public string AuthoritytIdentifier { get; set; }

        public string EntityName { get; set; }

        public string EntityIdentifier { get; set; }

        public string Name { get; set; }
    }
}