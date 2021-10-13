import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferenciasMusicoPageRoutingModule } from './preferencias-musico-routing.module';

import { PreferenciasMusicoPage } from './preferencias-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferenciasMusicoPageRoutingModule
  ],
  declarations: [PreferenciasMusicoPage]
})
export class PreferenciasMusicoPageModule {}
