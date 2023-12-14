using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace StudentApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OidcConfigurationController : ControllerBase
    {
        private readonly ILogger<OidcConfigurationController> _logger;
        private readonly IClientRequestParametersProvider _clientRequestParametersProvider;

        public OidcConfigurationController(IClientRequestParametersProvider clientRequestParametersProvider, ILogger<OidcConfigurationController> logger)
        {
            _clientRequestParametersProvider = clientRequestParametersProvider;
            _logger = logger;
        }

        [HttpGet("{clientId}")]
        public IActionResult GetClientRequestParameters([FromRoute] string clientId)
        {
            var parameters = _clientRequestParametersProvider.GetClientParameters(HttpContext, clientId);
            return Ok(parameters);
        }
    }
}