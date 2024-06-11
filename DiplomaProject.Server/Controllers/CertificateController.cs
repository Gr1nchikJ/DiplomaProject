using DiplomaProject.Core.Commands.Certificate;
using DiplomaProject.Core.Model.Certificate;
using DiplomaProject.Core.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DiplomaProject.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CertificateController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> GetAll([FromServices] IGetAllCertificatesQuery getAllCertificatesQuery)
        {
           var result = await getAllCertificatesQuery.ExecuteAsync();

            return Ok(result);
        }

        [HttpGet("{id}", Name = "GetById")]
        public async Task<IActionResult> GetById(Guid id, [FromServices] IGetByIdCertificateQuery getByIdCertificateQuery)
        {
            var result = await getByIdCertificateQuery.ExecuteAsync(id);

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
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

        [HttpDelete("{id}", Name = "Delete")]
        public async Task<IActionResult> Delete(Guid id, [FromServices] IDeleteCertificateCommand deleteCertificateCommand)
        {
            var result = await deleteCertificateCommand.ExecuteAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return Ok();
        }
    }
}
