import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DragDropModule } from 'primeng/dragdrop';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnFlowComponent } from './components/column-flow/column-flow.component';
import { ColumnFlowBodyComponent } from './components/column-flow/column-flow-body/column-flow-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnFlowComponent,
    ColumnFlowBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    PanelModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
