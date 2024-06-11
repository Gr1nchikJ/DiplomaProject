using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DiplomaProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddContactInfoAndFlagsForAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CertificateName",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Comments",
                table: "Certificates",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ContactInfoId",
                table: "Certificates",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<bool>(
                name: "IsApprovedByAdmin",
                table: "Certificates",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsPublishedToBlockchain",
                table: "Certificates",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ContactName = table.Column<string>(type: "nvarchar(256)", nullable: true),
                    ContactEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactNumber = table.Column<string>(type: "nvarchar(256)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Certificates_ContactInfoId",
                table: "Certificates",
                column: "ContactInfoId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Certificates_Contacts_ContactInfoId",
                table: "Certificates",
                column: "ContactInfoId",
                principalTable: "Contacts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Certificates_Contacts_ContactInfoId",
                table: "Certificates");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Certificates_ContactInfoId",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "CertificateName",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "Comments",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "ContactInfoId",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "IsApprovedByAdmin",
                table: "Certificates");

            migrationBuilder.DropColumn(
                name: "IsPublishedToBlockchain",
                table: "Certificates");
        }
    }
}
