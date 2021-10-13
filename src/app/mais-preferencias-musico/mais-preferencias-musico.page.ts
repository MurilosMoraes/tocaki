import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mais-preferencias-musico',
  templateUrl: './mais-preferencias-musico.page.html',
  styleUrls: ['./mais-preferencias-musico.page.scss'],
})
export class MaisPreferenciasMusicoPage implements OnInit {


  maisPreferencias = true
  sucesso = false

  constructor() { }

  ngOnInit() {
  }
 
  showMaisPreferencias(){
    this.maisPreferencias = true
    this.sucesso = false
  }

  showSucesso(){
    this.maisPreferencias = false
    this.sucesso = true
  }

}
