import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertDenunciaPage } from '../modals/alert-denuncia/alert-denuncia.page';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  principal = true
  enviado = false

  constructor(
    private modalCtrl: ModalController
  ) {}

  async showAlertDenuncia(){
    const modal = await this.modalCtrl.create({
      component: AlertDenunciaPage
    })

    modal.present()
  }

  ngOnInit() {
  }

  showEnviado(){
    this.principal = false
    this.enviado = true
  }


}
