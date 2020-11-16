import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HorizontalGridComponent, ImageSliderComponent, TabBarComponent} from './components';
import { GridItemDirective,GridItemImageDirective,GridItemTitleDirective } from './directors';
import { AgoPipe } from './pipes';

@NgModule({
  declarations: [
    TabBarComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    AgoPipe
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
    GridItemTitleDirective,
    AgoPipe
  ]
})
export class SharedModule { }
