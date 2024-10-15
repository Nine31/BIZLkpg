using MediatR;
using Persistence;

namespace Application.Vijest
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
                var vijest = await _context.Vijestis.FindAsync(request.Id);

                _context.Remove(vijest);

                await _context.SaveChangesAsync();
            }
        }
    }
}