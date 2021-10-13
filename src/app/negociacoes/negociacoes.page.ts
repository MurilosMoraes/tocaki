import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negociacoes',
  templateUrl: './negociacoes.page.html',
  styleUrls: ['./negociacoes.page.scss'],
})
export class NegociacoesPage implements OnInit {

  negocios = true
  match = false

  constructor() { }

  ngOnInit() {
  }

  presentNegocios(){
    this.negocios = true
    this.match = false
    
  }

  presentMatch(){
    this.negocios = false
    this.match = true
    
  }

}
