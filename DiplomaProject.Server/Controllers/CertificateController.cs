using DiplomaProject.Core.Commands.Certificate;
using DiplomaProject.Core.Model.Certificate;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaProject.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificateController : Controller
    {
        // GET: CertificateController
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return View();
        }

        [HttpPost(Name = "CreateCertificate")]
        public async Task<IActionResult> Create([FromBody] CreateCertificateModel createCertificateModel, [FromServices] ICreateCertificateCommand createCertificateCommand)
        {
            if (createCertificateModel == null)
            {
                return BadRequest();
            }

            var result = await createCertificateCommand.ExecuteAsync(createCertificateModel);

            return Created(string.Empty, result);
        }
    }
}
