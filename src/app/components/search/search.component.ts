import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() cityNameSearched = new EventEmitter<{cityName: string}>();
  cityName!: string;

  searchCityWeather() {
    console.log("Function Works");
    this.cityNameSearched.emit({ cityName: this.cityName })
  }
}
