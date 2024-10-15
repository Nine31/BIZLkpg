using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Vijest
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Vijesti Vijesti { get; set; }
        }
        
        public class Handler : IRequestHandler<Command>
        {
        private readonly IMapper _mapper;

            private readonly DataContext _context;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var vijest = await _context.Vijestis.FindAsync(request.Vijesti.Id);

                _mapper.Map(request.Vijesti, vijest);

                await _context.SaveChangesAsync();
            }
        }
    }
}