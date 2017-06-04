import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmaPagamentoPage } from '../confirma-pagamento/confirma-pagamento';

@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html',
})
export class PagamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadConfirmaPagamento() {
    this.navCtrl.push(ConfirmaPagamentoPage, {});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagamentoPage');
  }

}
