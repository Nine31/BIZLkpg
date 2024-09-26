using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Hutbe
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Hutba Hutba { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var hutba = await _context.Hutbas.FindAsync(request.Hutba.Id);

                _mapper.Map(request.Hutba, hutba);

                await _context.SaveChangesAsync();
            }
        }
    }
}