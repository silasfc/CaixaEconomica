import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-confirma-transferencia',
  templateUrl: 'confirma-transferencia.html',
})
export class ConfirmaTransferenciaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmaTransferenciaPage');
  }

}
