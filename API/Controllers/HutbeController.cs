using Application.Hutbe;
using Domain;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers;

public class HutbeController : BaseAPIController
{
    [HttpGet]
    public async Task<ActionResult<List<Hutba>>> GetAllHutbe()
    {
        return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Hutba>> GetHutba(Guid id)
    {
        return await Mediator.Send(new Details.Query{Id = id});
    }

    [HttpPost]
    public async Task<IActionResult> CreateHutba(Hutba hutba)
    {
        await Mediator.Send(new Create.Command {Hutba = hutba});

        return Ok();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> EditHutba(Guid id, Hutba hutba)
    {
        hutba.Id = id;
        
        await Mediator.Send(new Edit.Command {Hutba = hutba});

        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteHutba(Guid id)
    {
        await Mediator.Send(new Delete.Command {Id = id});

        return Ok();
    }
}
