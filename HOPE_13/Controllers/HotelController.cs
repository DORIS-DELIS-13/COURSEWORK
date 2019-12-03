using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using HOPE_13.Data;
using HOPE_13.Dtos;
using HOPE_13.Models;
using Microsoft.AspNetCore.Mvc;

namespace HOPE_13.Controllers
{
   [Route("api/[controller]")]
    public class HotelController: ControllerBase
    {
    public readonly IHotelRepository _repo;
    public readonly IMapper _mapper;
    public HotelController(IHotelRepository repo, IMapper mapper)
    {
      _mapper = mapper;
      _repo = repo;
    }

    [HttpGet]
    public async Task<IActionResult> GetHotels()
    {
      var hotels = await _repo.GetHotels();
      var hotelsToReturn = _mapper.Map<IEnumerable<HotelForListDto>>(hotels);

      return Ok(hotelsToReturn);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetHotel(int id)
    {
      var hotel = await _repo.GetHotel(id);
      var hotelsToReturn = _mapper.Map<HotelForDetailedDto>(hotel);
      return Ok(hotelsToReturn);
    }
    
     [HttpPost("registerHotel")]
    public async Task<IActionResult> SetHotel(HotelForSet hotelForRegisterDto)
    {
      hotelForRegisterDto.hotel = hotelForRegisterDto.hotel;
      var tourToCreate = new Hotel
      {
        hotel = hotelForRegisterDto.hotel
      };
      var createdTour = await _repo.SetHotel(tourToCreate);
      return StatusCode(201);
    }
    }   
}
