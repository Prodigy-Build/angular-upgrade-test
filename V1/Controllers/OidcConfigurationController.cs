using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace StudentApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OidcConfigurationController : ControllerBase
    {
        private readonly IClientRequestParametersProvider _clientRequestParametersProvider;
        private readonly ILogger<OidcConfigurationController> _logger;

        public OidcConfigurationController(IClientRequestParametersProvider clientRequestParametersProvider, ILogger<OidcConfigurationController> logger)
        {
            _clientRequestParametersProvider = clientRequestParametersProvider;
            _logger = logger;
        }

        [HttpGet("_configuration/{clientId}")]
        public IActionResult GetClientRequestParameters(string clientId)
        {
            var parameters = _clientRequestParametersProvider.GetClientParameters(HttpContext, clientId);
            return Ok(parameters);
        }
    }
}