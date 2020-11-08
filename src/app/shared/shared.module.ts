import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HorizontalGridComponent, ImageSliderComponent, 
  TabBarComponent} from '../components';

@NgModule({
  declarations: [
    TabBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TabBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
