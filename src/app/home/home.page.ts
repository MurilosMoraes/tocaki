import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltrosPage } from '../modals/filtros/filtros.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController
  ) {}

  async showModalFiltros(){
    const modal = await this.modalCtrl.create({
      component: FiltrosPage
    })

    modal.present()
  }


}
