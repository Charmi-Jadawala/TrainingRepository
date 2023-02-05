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
    public class TopicController : ControllerBase
    {
        private readonly ITopicService _topicService;
        public TopicController(ITopicService topicService)
        {
            _topicService = topicService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_topicService.GetAll());
        }

        [HttpGet("ByModuleId/{id}")]
        public IActionResult GetByCourseId(int id)
        {
            return Ok(_topicService.GetByModuleId(id));
        }


        [HttpGet("{id}")]
        public IActionResult GetBy(int id)
        {
            return Ok(_topicService.GetBy(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Topic topic)
        {
            return Ok(_topicService.Add(topic));
        }

        [HttpPut]
        public IActionResult Put([FromBody] Topic topic)
        {
            return Ok(_topicService.Update(topic));
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok(_topicService.Delete(id));
        }
    }
}
