import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmaTransferenciaPage } from '../confirma-transferencia/confirma-transferencia';

@Component({
    selector: 'page-transferencia',
    templateUrl: 'transferencia.html'
})
export class TransferenciaPage {

    constructor(public navCtrl: NavController) {

    }

    navConfirmaTransferencia() {
      this.navCtrl.push(ConfirmaTransferenciaPage, {});
    }

}
