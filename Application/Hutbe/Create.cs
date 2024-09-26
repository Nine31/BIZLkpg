using Domain;
using MediatR;
using Persistence;

namespace Application.Hutbe
{
    public class Create
    {
        public class Command : IRequest
        {
            public Hutba Hutba { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context; 
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Hutbas.Add(request.Hutba);

                await _context.SaveChangesAsync();
            }
        }
    }
}