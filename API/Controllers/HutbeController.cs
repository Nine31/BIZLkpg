using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class HutbeController : BaseAPIController
{
    private readonly DataContext _context;
    public HutbeController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Hutba>>> GetAllHutbe()
    {
        return await _context.Hutbas.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Hutba>> GetHutba(Guid id)
    {
        return await _context.Hutbas.FindAsync(id);
    }
}
