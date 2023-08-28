using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class newSeederForAdminUserName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "NormalizedUserName", "PasswordHash", "RefralCode", "UserName" },
                values: new object[] { "b6f19466-6198-4344-9b8e-8e5e8a8d60ed", "09173365950", "AQAAAAIAAYagAAAAEPSvTMS3S//RKior6GA/5mWJi4QkHyboibnvP34/SfMj1Ec/UYqhPgoLJSfuH4khLQ==", "HMLRXZMD", "09173365950" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "NormalizedUserName", "PasswordHash", "RefralCode", "UserName" },
                values: new object[] { "90402bfa-907b-4bc9-9f4c-71691b08d864", "_admin_ad", "AQAAAAIAAYagAAAAEIqx29xXBOuQlLLaikInZEeZiEAbYJTA/pm+7K80WLcdmCcCH50jOJimUwjTOtf8hw==", "NMHBMZHP", "_admin_ad" });
        }
    }
}
