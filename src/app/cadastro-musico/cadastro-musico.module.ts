import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroMusicoPageRoutingModule } from './cadastro-musico-routing.module';

import { CadastroMusicoPage } from './cadastro-musico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroMusicoPageRoutingModule
  ],
  declarations: [CadastroMusicoPage]
})
export class CadastroMusicoPageModule {}
