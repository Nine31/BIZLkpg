using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Hutbe
{
    public class List
    {
        public class Query : IRequest<List<Hutba>> {}

        public class Handler : IRequestHandler<Query, List<Hutba>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
                
            }
            public async Task<List<Hutba>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Hutbas.ToListAsync();
            }
        }
    }
}