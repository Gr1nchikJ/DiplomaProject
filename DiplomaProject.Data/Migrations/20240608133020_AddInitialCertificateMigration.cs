using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DiplomaProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddInitialCertificateMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Certificates",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AuthorityName = table.Column<string>(type: "nvarchar(256)", nullable: false),
                    AuthoritytIdentifier = table.Column<string>(type: "nvarchar(256)", nullable: false),
                    EntityName = table.Column<string>(type: "nvarchar(256)", nullable: false),
                    EntityIdentifier = table.Column<string>(type: "nvarchar(256)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Certificates", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Certificates");
        }
    }
}
