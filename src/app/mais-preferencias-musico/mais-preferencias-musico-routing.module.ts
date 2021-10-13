import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaisPreferenciasMusicoPage } from './mais-preferencias-musico.page';

const routes: Routes = [
  {
    path: '',
    component: MaisPreferenciasMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaisPreferenciasMusicoPageRoutingModule {}
