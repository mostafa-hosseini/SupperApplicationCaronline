using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperApp.Caronlineofficial.com.Migrations
{
    /// <inheritdoc />
    public partial class ConfirmCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ConfirmCode",
                table: "SmsActiveCodes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "ec409fc8-cc69-4fdf-a89b-e64e53446874", "AQAAAAIAAYagAAAAEOfUTPBGqYyin3RzMaxNamasthR8yb0d0oO2wprtKcb9p8O4VeUzzMehlFbAFSknZA==", "LNKYMIFH" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConfirmCode",
                table: "SmsActiveCodes");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0a0b379d-0e7a-442e-a90a-ba103f8595885",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "RefralCode" },
                values: new object[] { "caf9abb3-c3af-460b-ab11-75da4db32ad6", "AQAAAAIAAYagAAAAEDl24v+Deq7qiSyfLLQ9TVZP37iWliaKEd8SeJHU3thohHJFxIFLj1u506QInwe95A==", "VMOXLGBQ" });
        }
    }
}
