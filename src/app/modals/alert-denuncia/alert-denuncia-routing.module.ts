import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertDenunciaPage } from './alert-denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: AlertDenunciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertDenunciaPageRoutingModule {}
