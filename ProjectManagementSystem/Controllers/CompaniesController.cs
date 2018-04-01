﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectManagementSystem.Models;

namespace ProjectManagementSystem.Controllers
{
    [Produces("application/json")]
    [Route("api/Companies")]
    public class CompaniesController : Controller
    {
        private readonly PMSContext _context;

        public CompaniesController(PMSContext context)
        {
            _context = context;
        }

        // GET: api/Companies
        [HttpGet]
        public IEnumerable<Company> GetCompany()
        {
            return _context.Company;
        }

        // GET: api/Companies/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompany([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var company = await _context.Company.SingleOrDefaultAsync(m => m.ID == id);

            if (company == null)
            {
                return NotFound();
            }

            return Ok(company);
        }

        // PUT: api/Companies/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompany([FromRoute] int id, [FromBody] Company company)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != company.ID)
            {
                return BadRequest();
            }

            _context.Entry(company).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Companies
        [HttpPost]
        public async Task<IActionResult> PostCompany([FromBody] Company company)
        {  
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            company.Subscription = Subscription.Free;

            _context.Company.Add(company);
            await _context.SaveChangesAsync();

            var memberList = new List<CompanyMember>
            {
                new CompanyMember 
                {
                    UserID = company.OwnerId,
                    CompanyID = company.ID,
                    Role = Role.Owner 
                }
            };
            company.CompanyMembers = memberList;
            
            _context.Entry(company).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            
            return CreatedAtAction("GetCompany", new { id = company.ID }, company);
        }

        // DELETE: api/Companies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var company = await _context.Company.SingleOrDefaultAsync(m => m.ID == id);
            if (company == null)
            {
                return NotFound();
            }

            _context.Company.Remove(company);
            await _context.SaveChangesAsync();

            return Ok(company);
        }

        private bool CompanyExists(int id)
        {
            return _context.Company.Any(e => e.ID == id);
        }
    }
}