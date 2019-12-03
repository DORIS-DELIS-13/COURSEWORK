using Microsoft.EntityFrameworkCore.Migrations;

namespace HOPE_13.Migrations
{
    public partial class vn1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isMain",
                table: "ImageHotels",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isMain",
                table: "ImageHotels");
        }
    }
}
