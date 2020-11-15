import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeContainerComponent, HomeDetailComponent, HomeGrandComponent } from './components';
import { HomeAuxComponent } from './components/home-aux.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {path: 'grand', component: HomeGrandComponent},
          {path: 'aux', component: HomeAuxComponent, outlet: 'second'},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
