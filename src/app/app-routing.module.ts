import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { WebdesignComponent } from './webdesign/webdesign.component';

const routes: Routes = [
  {
    path: 'webdesign',
    component: WebdesignComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
