using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class ExpCodeInSMSTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ExpireActiveCode",
                table: "SmsActiveCodes",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "f3bf0061-1a32-4e00-8d4e-3daeb00f21dc", "AQAAAAIAAYagAAAAEIXRlzhYL/xZicFXFernu/Gz+DtG5Dp518B6hZpXLfqnqSCwsY1fZU+5RfdRRyopGg==", "QJNQHBYO" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExpireActiveCode",
                table: "SmsActiveCodes");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "ec409fc8-cc69-4fdf-a89b-e64e53446874", "AQAAAAIAAYagAAAAEOfUTPBGqYyin3RzMaxNamasthR8yb0d0oO2wprtKcb9p8O4VeUzzMehlFbAFSknZA==", "LNKYMIFH" });
        }
    }
}
