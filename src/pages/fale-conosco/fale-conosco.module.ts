import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaleConoscoPage } from './fale-conosco';

@NgModule({
  declarations: [
    FaleConoscoPage,
  ],
  imports: [
    IonicPageModule.forChild(FaleConoscoPage),
  ],
  exports: [
    FaleConoscoPage
  ]
})
export class FaleConoscoPageModule {}
