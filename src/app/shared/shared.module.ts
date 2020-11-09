import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HorizontalGridComponent, ImageSliderComponent, TabBarComponent} from './components';
import { GridItemDirective,GridItemImageDirective,GridItemTitleDirective } from './directors';

@NgModule({
  declarations: [
    TabBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective 
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TabBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective 
  ]
})
export class SharedModule { }
