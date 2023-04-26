import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Observable, map, startWith } from 'rxjs';
import { ForecastWeatherService } from 'src/app/services/forecast-weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  myControl=new FormControl();

  options: string[] = [];
  filteredOptions!: Observable<string[]>;

  constructor(private weatherService: ForecastWeatherService) {}

  ngOnInit(): void {
    this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => value.length > 3 ? this._filter(value): [])
    );
  }

  getCitiesSuggestions(cityName: string) {
    if(cityName.length > 3) {
      this.weatherService.getAutocompleteData(cityName).subscribe(
        (response) => {
          console.log(response);
          this.options=response;
        }
      )
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }

  @Output() cityNameSearched = new EventEmitter<{cityName: string}>();
  cityName!: string;

  searchCityWeather() {
    console.log("Function Works");
    this.cityNameSearched.emit({ cityName: this.cityName });
    console.log(this.cityName);
  }
}
