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
          
          CreateMap<Tour, TourForDetailedDto>()
          .ForMember(destination => destination.Hotel, opt => {
              opt.MapFrom(src => src.Hotels.ToList());
            });

          CreateMap<Tour, TourForListDto>();
          CreateMap<ImageHotel, ImageHotelForDetailedDto>();
          CreateMap<User,UserForListDto>();   
          CreateMap<UserForRegisterDto,User>();


      }
    }
}