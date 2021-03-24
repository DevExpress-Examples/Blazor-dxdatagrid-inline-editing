using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorGridInlineEditing.Data
{
    public class WeatherForecastService
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        private List<WeatherForecast> Forecasts { get; set; }
        public WeatherForecastService() {
            Forecasts = CreateForecast();
        }
        public List<WeatherForecast> CreateForecast() {
            var rng = new Random();
            return Enumerable.Range(1, 20).Select(index => new WeatherForecast {
                ID = index - 1,
                Date = DateTime.Today.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            }).ToList();
        }
        public Task<List<WeatherForecast>> GetForecastAsync() {
            return Task.FromResult(Forecasts);
        }
        List<WeatherForecast> UpdateChangesInternal(WeatherForecast newItem, int KeyValue) {
            WeatherForecast DataItem = Forecasts.FirstOrDefault(x => x.ID == KeyValue);
            DataItem.Date = newItem.Date;
            DataItem.Summary = newItem.Summary;
            DataItem.TemperatureC = newItem.TemperatureC;

            return Forecasts;
        }
        public Task<List<WeatherForecast>> UpdateChanges(WeatherForecast newItem, int KeyValue) {
            return Task.FromResult(UpdateChangesInternal(newItem, KeyValue));
        }
    }
}
