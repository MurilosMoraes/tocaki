import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-denuncia',
  templateUrl: './alert-denuncia.page.html',
  styleUrls: ['./alert-denuncia.page.scss'],
})
export class AlertDenunciaPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss()
  }
}
