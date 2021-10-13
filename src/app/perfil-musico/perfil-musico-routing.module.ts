import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilMusicoPage } from './perfil-musico.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMusicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMusicoPageRoutingModule {}
