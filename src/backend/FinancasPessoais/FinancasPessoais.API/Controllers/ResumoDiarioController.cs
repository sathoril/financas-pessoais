using Microsoft.AspNetCore.Mvc;

namespace FinancasPessoais.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ResumoDiarioController : ControllerBase
{
    public ResumoDiarioController()
    {
    }

    [HttpPost("adicionar")]
    public IActionResult AdicionarGasto([FromBody] AdicionarGastoRequest request)
    {
        return Ok();
    }
    
    [HttpGet("cabecalho")]
    public IActionResult ObterCabecalho()
    {
        var response = new CabecalhoResumoDiarioResponse()
        {
            AvailableValue = 12546,
            TotalSpent = 1232
        };
        return Ok(response);
    }

    [HttpGet]
    public IActionResult ObterResumoDiario()
    {
        var baseDate = new DateTime(2024, 11, 16);
        var response = new List<ResumoDiarioResponse>()
        {
            new()
            {
                Id = 1,
                Hour = DateTime.Now,
                ValueSpent = 12312
            },
            new()
            {
                Id = 2,
                Hour = baseDate.AddHours(1).AddMinutes(12),
                ValueSpent = 12312
            },
            new()
            {
                Id = 3,
                Hour = baseDate.AddHours(5).AddMinutes(32),
                ValueSpent = 8912
            },
            new()
            {
                Id = 4,
                Hour = baseDate.AddHours(6).AddMinutes(54),
                ValueSpent = 359
            },
            new()
            {
                Id = 5,
                Hour = baseDate.AddHours(3).AddMinutes(43),
                ValueSpent = 200
            }
        };
        
        return Ok(response);
    }
}

public class ResumoDiarioResponse
{
    public int Id { get; set; }
    public DateTime Hour { get; set; }
    public decimal ValueSpent { get; set; }
}

public class CabecalhoResumoDiarioResponse
{
    public int AvailableValue { get; set; }
    public int TotalSpent { get; set; }
}

public class AdicionarGastoRequest 
{
    public int ValorRecebido { get; set; }
    public int ValorGasto { get; set; }
}