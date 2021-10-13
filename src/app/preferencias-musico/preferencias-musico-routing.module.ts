import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferenciasMusicoPage } from './preferencias-musico.page';

const routes: Routes = [
  {
    path: '',
    component: PreferenciasMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferenciasMusicoPageRoutingModule {}
