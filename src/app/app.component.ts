import { Component, OnInit } from '@angular/core';
import { ForecastWeatherService } from './services/forecast-weather.service';
import { WeatherData } from './models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Weather App';

  weatherData$?: Observable<WeatherData>;

  dataLoaded: boolean = false;

  constructor(private weatherService: ForecastWeatherService) {}

  ngOnInit(): void {
    this.weatherData$ = this.weatherService.getWeatherData('')
  }

  onCitySearched(eventData: {cityName: string}) {
    this.weatherData$ = this.weatherService.getWeatherData(eventData.cityName)
    this.dataLoaded = true;
  }
}
