import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoMusicoPage } from './codigo-musico.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoMusicoPageRoutingModule {}
