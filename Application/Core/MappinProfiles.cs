using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappinProfiles : Profile
    {
        public MappinProfiles()
        {
            CreateMap<Activity, Activity>();
        }
    }
}