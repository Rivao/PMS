using System;
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
    [Route("api/CompanyMembers")]
    public class CompanyMembersController : Controller
    {
        private readonly PMSContext _context;

        public CompanyMembersController(PMSContext context)
        {
            _context = context;
        }

        // GET: api/CompanyMembers
        [HttpGet]
        public IEnumerable<CompanyMember> GetCompanyMember()
        {
            return _context.CompanyMember;
        }

        // GET: api/CompanyMembers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompanyMember([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var companyMember = await _context.CompanyMember.SingleOrDefaultAsync(m => m.ID == id);

            if (companyMember == null)
            {
                return NotFound();
            }

            return Ok(companyMember);
        }

        // PUT: api/CompanyMembers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyMember([FromRoute] int id, [FromBody] CompanyMember companyMember)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != companyMember.ID)
            {
                return BadRequest();
            }

            _context.Entry(companyMember).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyMemberExists(id))
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

        // POST: api/CompanyMembers
        [HttpPost]
        public async Task<IActionResult> PostCompanyMember([FromBody] CompanyMember companyMember)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CompanyMember.Add(companyMember);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompanyMember", new { id = companyMember.ID }, companyMember);
        }

        // DELETE: api/CompanyMembers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyMember([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var companyMember = await _context.CompanyMember.SingleOrDefaultAsync(m => m.ID == id);
            if (companyMember == null)
            {
                return NotFound();
            }

            _context.CompanyMember.Remove(companyMember);
            await _context.SaveChangesAsync();

            return Ok(companyMember);
        }

        private bool CompanyMemberExists(int id)
        {
            return _context.CompanyMember.Any(e => e.ID == id);
        }
    }
}