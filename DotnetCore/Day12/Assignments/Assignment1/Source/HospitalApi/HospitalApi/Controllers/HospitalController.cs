using HospitalApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HospitalApi.Controllers
{
    [Route("api/Doctor")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private DataHelper dataHelper { get; set; }

        public HospitalController()
        {
            dataHelper = new DataHelper();
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await dataHelper.GetDoctors());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDoctor(int id)
        {
            return Ok(await dataHelper.GetDoctorById(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Doctor newDoctor)
        {
            var errArr = new List<string>();

            if (string.IsNullOrEmpty(newDoctor.FirstName))
                errArr.Add("First Name is required...");
            else if (string.IsNullOrEmpty(newDoctor.LastName))
                errArr.Add("Last Name is required...");
            else if (newDoctor.DeptId <= 0)
                errArr.Add("Invalid Department ID...");
            else if (string.IsNullOrEmpty(newDoctor.Designation))
                errArr.Add("Designation is required...");
            else if (newDoctor.Salary < 10000 || newDoctor.Salary > 99999999)
                errArr.Add("Invalid Salary...");

            if (errArr.Count > 0)
                return BadRequest(errArr);
            else
                return Ok(await dataHelper.AddDoctor(newDoctor));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Doctor editedDoctor)
        {
            var errArr = new List<string>();

            if (string.IsNullOrEmpty(editedDoctor.FirstName))
                errArr.Add("First Name is required...");
            else if (string.IsNullOrEmpty(editedDoctor.LastName))
                errArr.Add("Last Name is required...");
            else if (editedDoctor.DeptId <= 0)
                errArr.Add("Invalid Department ID...");
            else if (string.IsNullOrEmpty(editedDoctor.Designation))
                errArr.Add("Designation is required...");
            else if (editedDoctor.Salary < 10000 || editedDoctor.Salary > 99999999)
                errArr.Add("Invalid Salary...");

            if (errArr.Count > 0)
                return BadRequest(errArr);
            else
                return Ok(await dataHelper.UpdateDoctor(id, editedDoctor));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await dataHelper.DeleteDoctor(id));
        }

        [HttpGet("PatientReport/{name}")]
        public async Task<IActionResult> GetPatients(string name)
        {
            return Ok(await dataHelper.GetPatientReport(name));
        }

        [HttpGet("PatientMedicineReport/{name}")]
        public async Task<IActionResult> GetPatientMedicines(string name)
        {
            return Ok(await dataHelper.GetPatientMedicineReport(name));
        }

        [HttpGet("SummaryReport")]
        public async Task<IActionResult> GetSummary()
        {
            return Ok(await dataHelper.GetSummaryReport());
        }
    }
}
