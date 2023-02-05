using Coursera.Models;
using Coursera.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Coursera.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ISearchService _searchService;
        public SearchController(ISearchService searchService)
        {
            _searchService = searchService;
        }

        [HttpGet("category/{CourseId}")]
        public IActionResult GetCourseByCategory(int CourseId)
        {
            return Ok(_searchService.GetByCategory(CourseId));
        }

        [HttpGet("subcategory/{CourseId}")]
        public IActionResult GetCourseBySubCategory(int CourseId)
        {
            return Ok(_searchService.GetBySubCategory(CourseId));
        }
    }
}
