using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class SmsActiveCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SmsActiveCodes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SmsActiveCodes", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "caf9abb3-c3af-460b-ab11-75da4db32ad6", "AQAAAAIAAYagAAAAEDl24v+Deq7qiSyfLLQ9TVZP37iWliaKEd8SeJHU3thohHJFxIFLj1u506QInwe95A==", "VMOXLGBQ" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SmsActiveCodes");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "42750498-2475-4225-bf4b-2a7d40c640f3", "AQAAAAIAAYagAAAAEOil0b38U8Qu/XX/ueTXx/+wGzI2gYY+vh220aW06/yM2bLIknJsAl87wzzu6KdBBg==", "PMNSVNVQ" });
        }
    }
}
