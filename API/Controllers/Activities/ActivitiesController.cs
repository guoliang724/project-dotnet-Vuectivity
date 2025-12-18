

using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
  public class ActivitiesController(AppDbContext context) : BasicController
  {
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> getActivities()
    {
      return await context.Activities.ToListAsync();
    }

    // [HttpGet(":id")]
    // public async Task<ActionResult<Activity>> getActivityById([FromRoute] id)
    // {
      
    // }
  }
}
