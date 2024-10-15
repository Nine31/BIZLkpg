using Domain;
using MediatR;
using Persistence;

namespace Application.Vijest
{
    public class Details
    {
        public class Query : IRequest<Vijesti>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Vijesti>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Vijesti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Vijestis.FindAsync(request.Id);
            }
        }
    }
}