import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-upper-body',
  templateUrl: './upper-body.component.html',
  styleUrls: ['./upper-body.component.css']
})
export class UpperBodyComponent implements OnInit {

  @Input()
  weatherDataForUpperBody$: Observable<WeatherData> | undefined;

  weatherData!: WeatherData;

  ngOnInit(): void {
    this.weatherDataForUpperBody$?.subscribe(
      (response) => {
        console.log(response);
        this.weatherData = response;
      }
    )
  }
}
