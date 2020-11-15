import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';
import { HomeAuxComponent } from './components/home-aux.component';

@NgModule({
    declarations: [HomeContainerComponent,HomeDetailComponent,HomeGrandComponent,HomeAuxComponent],
    imports: [ 
        HomeRoutingModule,
        SharedModule
    ],
    exports: [],
    providers: [],
})
export class HomeModule {}