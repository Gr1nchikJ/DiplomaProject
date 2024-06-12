using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Core.Model.Certificate
{
    public class CertificateModel : ICertificateModel
    {
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public string? CertificateName { get; set; }

        public string? AuthorityName { get; set; }

        public string? AuthoritytIdentifier { get; set; }

        public string? EntityName { get; set; }

        public string? EntityIdentifier { get; set; }

        public string? Name { get; set; }

        public string? AddressPostCode { get; set; }

        public string? Country { get; set; }

        public string? Region { get; set; }

        public string? District { get; set; }

        public string? City { get; set; }

        public string? Street { get; set; }

        public string? StreetNumber { get; set; }

        public string? BlockName { get; set; }

        public string? ContactName { get; set; }

        public string? ContactEmail { get; set; }

        public string? ContactNumber { get; set; }

        public string? Comments { get; set; }

        public bool IsApprovedByAdmin { get; set; } = false;

        public bool IsPublishedToBlockchain { get; set; } = false;
    }
}
