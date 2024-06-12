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
    public class ContactInfo
    {
        [Required]
        public Guid Id { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? ContactName { get; set; }

        [AllowNull]
        public string? ContactEmail { get; set; }

        [Column(TypeName = "nvarchar(256)")]
        [AllowNull]
        public string? ContactNumber { get; set; }
    }
}
