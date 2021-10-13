import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertDenunciaPageRoutingModule } from './alert-denuncia-routing.module';

import { AlertDenunciaPage } from './alert-denuncia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertDenunciaPageRoutingModule
  ],
  declarations: [AlertDenunciaPage]
})
export class AlertDenunciaPageModule {}
