import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';

@NgModule({
    declarations: [HomeContainerComponent,HomeDetailComponent],
    imports: [ 
        HomeRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}