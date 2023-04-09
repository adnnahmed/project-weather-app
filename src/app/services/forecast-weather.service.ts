import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../constants';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastWeatherService {

  constructor(private _http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this._http.get<WeatherData>(constants.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(constants.XRapidAPIHostLabel, constants.XRapidAPIHostValue)
        .set(constants.XRapidAPIKeyLabel, constants.XRapidAPIKeyValue),
      params: new HttpParams()
        .set('q', cityName)
    })
  }
}
