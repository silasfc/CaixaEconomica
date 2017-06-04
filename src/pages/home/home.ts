import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExtratoPage } from '../extrato/extrato';
import { PagamentoPage } from '../pagamento/pagamento';
import { TransferenciaPage } from '../transferencia/transferencia';
import { EmiteSenhaPage } from '../emite-senha/emite-senha';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log(navParams.get('auth'));
  }

  navExtrato() {
    this.navCtrl.push(ExtratoPage, {});
  }

  navPagamento() {
    this.navCtrl.push(PagamentoPage, {});
  }

  navTransferencia() {
    this.navCtrl.push(TransferenciaPage, {});
  }

  navEmiteSenha() {
    this.navCtrl.push(EmiteSenhaPage, {});
  }
}
