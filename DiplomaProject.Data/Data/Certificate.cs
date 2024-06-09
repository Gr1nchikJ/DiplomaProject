using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Data.Data
{
    public class Certificate
    {
        [Required]
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey("Address")]
        public Guid AddressId { get; set; }

        public Address Address { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? AuthorityName { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? AuthoritytIdentifier { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? EntityName { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? EntityIdentifier { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull] 
        public string? Name { get; set; }
    }
}
