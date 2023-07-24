using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class seed_data : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "18c04ec5-99ca-4016-952f-b4e08aab39ef", null, "Seller", "seller" },
                    { "54ba6e06-e7d2-4438-855e-dd731e6493bf", null, "Employee", "employee" },
                    { "c8a7e064-1c93-478d-9450-bd1858c2e40c", null, "Admin", "admin" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "BrithDay", "CityId", "ConcurrencyStamp", "Email", "EmailConfirmed", "ExpireLoginCode", "FullName", "Gender", "InvitedUserId", "Job", "LockoutEnabled", "LockoutEnd", "LoginCode", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "Point", "ProvinceId", "RefralCode", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[] { "0a0b379d-0e7a-442e-a90a-ba103f8595885", 0, null, null, "42750498-2475-4225-bf4b-2a7d40c640f3", "mostafa@admin.com", true, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "admin admini", 0, null, "", false, null, null, "mostafa@admin.com", "_admin_ad", "AQAAAAIAAYagAAAAEOil0b38U8Qu/XX/ueTXx/+wGzI2gYY+vh220aW06/yM2bLIknJsAl87wzzu6KdBBg==", null, false, 0, null, "PMNSVNVQ", "", false, "_admin_ad" });

            migrationBuilder.InsertData(
                table: "AspNetUserRoles",
                columns: new[] { "RoleId", "UserId" },
                values: new object[] { "c8a7e064-1c93-478d-9450-bd1858c2e40c", "0a0b379d-0e7a-442e-a90a-ba103f8595885" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "18c04ec5-99ca-4016-952f-b4e08aab39ef");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "54ba6e06-e7d2-4438-855e-dd731e6493bf");

            migrationBuilder.DeleteData(
                table: "AspNetUserRoles",
                keyColumns: new[] { "RoleId", "UserId" },
                keyValues: new object[] { "c8a7e064-1c93-478d-9450-bd1858c2e40c", "0a0b379d-0e7a-442e-a90a-ba103f8595885" });

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c8a7e064-1c93-478d-9450-bd1858c2e40c");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885");
        }
    }
}
