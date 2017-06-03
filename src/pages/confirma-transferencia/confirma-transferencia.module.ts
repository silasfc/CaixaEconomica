import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmaTransferenciaPage } from './confirma-transferencia';

@NgModule({
  declarations: [
    ConfirmaTransferenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmaTransferenciaPage),
  ],
  exports: [
    ConfirmaTransferenciaPage
  ]
})
export class ConfirmaTransferenciaPageModule {}
