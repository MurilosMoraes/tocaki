import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaisPreferenciasMusicoPageRoutingModule } from './mais-preferencias-musico-routing.module';

import { MaisPreferenciasMusicoPage } from './mais-preferencias-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaisPreferenciasMusicoPageRoutingModule
  ],
  declarations: [MaisPreferenciasMusicoPage]
})
export class MaisPreferenciasMusicoPageModule {}
