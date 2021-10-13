import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo-musico',
  templateUrl: './codigo-musico.page.html',
  styleUrls: ['./codigo-musico.page.scss'],
})
export class CodigoMusicoPage implements OnInit {

  confirmar = true
  sucesso = false

  constructor() { }

  ngOnInit() {
  }
 
  showConfirmar(){
    this.confirmar = true
    this.sucesso = false
  }

  showSucesso(){
    this.confirmar = false
    this.sucesso = true
  }

}
