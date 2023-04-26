import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { SearchComponent } from './components/search/search.component';
import { UpperBodyComponent } from './components/upper-body/upper-body.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UpperBodyComponent,
    ExpansionPanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatAutocompleteModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
