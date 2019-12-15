using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using HOPE_13.Data;
using HOPE_13.Dtos;
using HOPE_13.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HOPE_13.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    public class ToursController: ControllerBase
    {
        public readonly ITourRepository _repo;
    public readonly IMapper _mapper;
    public ToursController(ITourRepository repo, IMapper mapper)
    {
      _mapper = mapper;
      _repo = repo;

    }

    [HttpGet]
    public async Task<IActionResult> GetTours()
    {
      var tours = await _repo.GetTours();
      var toursToReturn = _mapper.Map<IEnumerable<TourForListDto>>(tours);

      return Ok(toursToReturn);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTour(int id)
    {
      var tour = await _repo.GetTour(id);
      var toursToReturn = _mapper.Map<TourForDetailedDto>(tour);
      return Ok(toursToReturn);
    }
    
     [HttpPost("registerTour")]
    public async Task<IActionResult> SetTour(TourForSetDto tourForSetDto)
    {
      tourForSetDto.Tourss = tourForSetDto.Tourss;
      var tourToCreate = new Tour
      {
        Tourss = tourForSetDto.Tourss
      };
      var createdTour = await _repo.SetTour(tourToCreate);
      return StatusCode(201);
    }
}
}
