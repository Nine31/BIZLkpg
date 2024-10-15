using Domain;
using MediatR;
using Persistence;
using SQLitePCL;

namespace Application.Vijest
{
    public class Create
    {
        public class Command : IRequest
        {
            public Vijesti Vijesti { get; set; }
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
                _context.Vijestis.Add(request.Vijesti);

                await _context.SaveChangesAsync();
            }
        }
    }
}