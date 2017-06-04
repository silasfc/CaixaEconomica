import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-emite-senha',
  templateUrl: 'emite-senha.html',
})
export class EmiteSenhaPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiteSenhaPage');
    this.alertCtrl.create({
      title: 'Localização',
      subTitle: 'Seu GPS não está ativo. Permite ativá-lo para buscarmos agências próximas de você?',
      buttons: ['Sim', 'Não']
    }).present();
  }

}
