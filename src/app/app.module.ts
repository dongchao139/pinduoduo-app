import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ImageSliderComponent, TabBarComponent} from './components';

@NgModule({
  declarations: [
    AppComponent,TabBarComponent,ImageSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
