import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherData } from 'src/app/models/weather.model';
import { ForecastWeatherService } from 'src/app/services/forecast-weather.service';
import { UpperBodyComponent } from '../upper-body/upper-body.component';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent {

  @Input()
  weatherDataForExpansionPanel!: WeatherData;

  panelOpenState = false;

  expandPanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
