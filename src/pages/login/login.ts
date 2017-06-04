import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FaleConoscoPage } from '../fale-conosco/fale-conosco';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  navHome() {
    // this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(HomePage, {auth: true});
  }

  navFaleConosco() {
    this.navCtrl.push(FaleConoscoPage, {auth: true});
  }

}
