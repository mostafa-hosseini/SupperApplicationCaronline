using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class newSeederForAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefralCode" },
                values: new object[] { "90402bfa-907b-4bc9-9f4c-71691b08d864", "AQAAAAIAAYagAAAAEIqx29xXBOuQlLLaikInZEeZiEAbYJTA/pm+7K80WLcdmCcCH50jOJimUwjTOtf8hw==", "09173365950", true, "NMHBMZHP" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefralCode" },
                values: new object[] { "a08b1dc0-88fb-4c9d-94f0-81aa3dd56588", "AQAAAAIAAYagAAAAEIPH/UZ8x20ep0ROvUCi/QO/7lcg2+GUi0AqpRkN4EGTlTtfH9W2V3/SMZ3Q23ppVA==", null, false, "XNSJWTMC" });
        }
    }
}
