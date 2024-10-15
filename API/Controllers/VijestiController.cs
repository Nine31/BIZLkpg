using Application.Vijest;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class VijestiController : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<List<Vijesti>>> GetAllVijesti()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vijesti>> GetVijest(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult> CreateVijest(Vijesti vijesti)
        {
            await Mediator.Send(new Create.Command {Vijesti = vijesti});

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditVijest(Guid id, Vijesti vijesti)
        {
            vijesti.Id = id;

            await Mediator.Send(new Edit.Command {Vijesti = vijesti});

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteVijest(Guid id)
        {
            await Mediator.Send(new Delete.Command {Id = id});

            return Ok();
        }
    }
}