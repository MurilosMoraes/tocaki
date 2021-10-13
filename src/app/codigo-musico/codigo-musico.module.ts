import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoMusicoPageRoutingModule } from './codigo-musico-routing.module';

import { CodigoMusicoPage } from './codigo-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoMusicoPageRoutingModule
  ],
  declarations: [CodigoMusicoPage]
})
export class CodigoMusicoPageModule {}
