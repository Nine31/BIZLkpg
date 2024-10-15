using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Hutba, Hutba>();
            CreateMap<Vijesti, Vijesti>();
        }
    }
}