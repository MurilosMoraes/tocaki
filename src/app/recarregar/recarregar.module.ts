import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecarregarPageRoutingModule } from './recarregar-routing.module';

import { RecarregarPage } from './recarregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecarregarPageRoutingModule
  ],
  declarations: [RecarregarPage]
})
export class RecarregarPageModule {}
