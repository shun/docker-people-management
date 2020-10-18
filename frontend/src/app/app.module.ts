// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// primeng
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';

// local component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from "./graphql.module";

// services
//import { PeopleService } from "./services/people.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    TableModule,
//    BrowserAnimationsModule,
//    FormsModule,
    AutoCompleteModule,
    InputTextModule,
  ],
  providers: [
//    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

