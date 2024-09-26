using MediatR;
using Persistence;

namespace Application.Hutbe
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var hutba = await _context.Hutbas.FindAsync(request.Id);

                _context.Remove(hutba);

                await _context.SaveChangesAsync();
            }
        }
    }
}