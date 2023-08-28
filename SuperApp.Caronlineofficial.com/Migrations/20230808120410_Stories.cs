using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class Stories : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SubTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Duration = table.Column<int>(type: "int", nullable: false),
                    StoryType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ExpiredTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FileName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ViewCount = table.Column<long>(type: "bigint", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stories", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "a08b1dc0-88fb-4c9d-94f0-81aa3dd56588", "AQAAAAIAAYagAAAAEIPH/UZ8x20ep0ROvUCi/QO/7lcg2+GUi0AqpRkN4EGTlTtfH9W2V3/SMZ3Q23ppVA==", "XNSJWTMC" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Stories");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "f3bf0061-1a32-4e00-8d4e-3daeb00f21dc", "AQAAAAIAAYagAAAAEIXRlzhYL/xZicFXFernu/Gz+DtG5Dp518B6hZpXLfqnqSCwsY1fZU+5RfdRRyopGg==", "QJNQHBYO" });
        }
    }
}
