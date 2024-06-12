using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DiplomaProject.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCertificateTableMakeNullable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(200)");

            migrationBuilder.AlterColumn<string>(
                name: "EntityName",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)");

            migrationBuilder.AlterColumn<string>(
                name: "EntityIdentifier",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(200)");

            migrationBuilder.AlterColumn<string>(
                name: "AuthoritytIdentifier",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)");

            migrationBuilder.AlterColumn<string>(
                name: "AuthorityName",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(256)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Certificates",
                type: "varchar(200)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "EntityName",
                table: "Certificates",
                type: "nvarchar(200)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "EntityIdentifier",
                table: "Certificates",
                type: "varchar(200)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AuthoritytIdentifier",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "AuthorityName",
                table: "Certificates",
                type: "nvarchar(256)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(256)",
                oldNullable: true);
        }
    }
}
