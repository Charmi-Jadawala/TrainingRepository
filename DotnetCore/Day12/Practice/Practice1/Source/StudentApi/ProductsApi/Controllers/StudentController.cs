using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using StudentApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private DataHelper dataHelper { get; set; }

        public StudentController()
        {
            dataHelper = new DataHelper();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await dataHelper.GetStudents());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetStudent(int id)
        {
            return Ok(await dataHelper.GetStudentById(id));
        }

        [HttpPost]
        public async Task<IActionResult> PostStudent([FromBody] Student2 student)
        {
            var errorArr = new List<string>();
            if (string.IsNullOrEmpty(student.StudentName))
            {
                errorArr.Add("Student Name is required.");
            }
            else if(student.TotalFees < 1000 || student.TotalFees >100000)
            {
                errorArr.Add("Total Fees is not valid.");
            }
            else if (student.RemainingAmt < 0)
            {
                errorArr.Add("Remaining Amount is not valid.");
            }

            if(errorArr.Count > 0)
            {
                return BadRequest(errorArr);
            }
            else
            {
                return Ok(await dataHelper.AddStudent(student));
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Student2 student)
        {
            return Ok(await dataHelper.UpdateStudent(id, student));
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> Patch(int id, [FromBody] JsonPatchDocument<Student2> student)
        {
            var s = await dataHelper.Get(id);
            student.ApplyTo(s);

            return Ok(await dataHelper.Update(s));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await dataHelper.DeleteStudent(id));
        }
    }
}
