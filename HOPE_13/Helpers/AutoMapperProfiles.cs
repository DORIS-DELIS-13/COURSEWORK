using System.Linq;
using AutoMapper;
using HOPE_13.Dtos;
using HOPE_13.Models;

namespace PosterStore.Helpers
{
    public class AutoMapperProfiles : Profile
    {
      public AutoMapperProfiles()
      {
         CreateMap<Hotel, HotelForListDto>()
            .ForMember(destination => destination.ImageUrl1, opt => {
              opt.MapFrom(src => src.ImageHotels.FirstOrDefault(p => p.isMain).ImageAdress);
            });
          CreateMap<Hotel, HotelForDetailedDto>()
            .ForMember(destination => destination.ImageUrl1, opt => {
              opt.MapFrom(src => src.ImageHotels.FirstOrDefault(p => p.isMain).ImageAdress);
            });

          CreateMap<Tour, TourForListDto>();
          CreateMap<Tour, TourForDetailedDto>();
        //  CreateMap<ImageHotel, ImageHotelForDetailedDto>();


      }
    }
}