import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { Data2Component } from './components/data2/data2.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    Data2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
