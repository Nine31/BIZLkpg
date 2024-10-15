using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Vijest
{
    public class List
    {
        public class Query : IRequest<List<Vijesti>> {}

        public class Handler : IRequestHandler<Query, List<Vijesti>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;   
            }
            public async Task<List<Vijesti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Vijestis.ToListAsync();
            }
        }
    }
}