using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiplomaProject.Data.Data
{
    public class Address
    {
        [Required]
        public Guid Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        [AllowNull]
        public string? AddressPostCode { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? Country { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? Region { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? District { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? City { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? Street { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? StreetNumber { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? BlockName { get; set; }
    }
}
