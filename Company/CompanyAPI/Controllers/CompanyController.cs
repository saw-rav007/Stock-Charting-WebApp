using System.Collections.Generic;
using System.Linq;
using CompanyAPI.Data;
using CompanyAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CompanyAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly CompanyContext _context;
        public CompanyController(CompanyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Company>> GetCompanies()
        {
            var company = _context.Companies.ToList();

            return Ok(company);
        }

        [HttpGet("{id}")]
        public ActionResult<Company> GetCompanyById(int id)
        {
            return _context.Companies.Find(id);
        }

        [HttpPost]
        public ActionResult<Company> PostCompany(Company company)
        {
            _context.Companies.Add(company);
            _context.SaveChanges();   // the postcommand chonges get into the persistent db from the inmemory changes

            return CreatedAtAction("GetCompanyById", new Company { Id = company.Id }, company);
        }

        [HttpPut("{id}")]
        public ActionResult<Company> PutCompany(int id, Company company)
        {
            if (id != company.Id)
                return BadRequest();

            _context.Entry(company).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }


        [HttpDelete("{id}")]
        public ActionResult<Company> DeleteCompany(int id)
        {
            var company = _context.Companies.Find(id);

            if (company == null)
                return NotFound();

            _context.Companies.Remove(company);
            _context.SaveChanges();

            return company;

        }
    }
}