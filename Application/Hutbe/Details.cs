using Domain;
using MediatR;
using Persistence;

namespace Application.Hutbe
{
    public class Details
    {
        public class Query : IRequest<Hutba>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Hutba>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Hutba> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Hutbas.FindAsync(request.Id);
            }
        }
    }
}