import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilMusicoPageRoutingModule } from './perfil-musico-routing.module';

import { PerfilMusicoPage } from './perfil-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilMusicoPageRoutingModule
  ],
  declarations: [PerfilMusicoPage]
})
export class PerfilMusicoPageModule {}
