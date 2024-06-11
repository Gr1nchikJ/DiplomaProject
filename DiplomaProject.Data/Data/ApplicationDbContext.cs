using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DiplomaProject.Data.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Certificate> Certificates { get; set; }

        public DbSet<Address> Addresses { get; set; }

        public DbSet<ContactInfo> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Certificate>()
                .HasOne(ud => ud.User)
                .WithMany()
                .HasForeignKey(ud => ud.UserId);

            builder.Entity<Certificate>()
                .HasOne(a => a.Address)
                .WithOne()
                .HasForeignKey<Certificate>(x => x.AddressId);

            builder.Entity<Certificate>()
                .HasOne(c => c.ContactInfo)
                .WithOne()
                .HasForeignKey<Certificate>(x => x.ContactInfoId);
        }
    }
}
