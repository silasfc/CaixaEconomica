import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfTransf } from './conf-transf';

@NgModule({
  declarations: [
    ConfTransf,
  ],
  imports: [
    IonicPageModule.forChild(ConfTransf),
  ],
  exports: [
    ConfTransf
  ]
})
export class ConfTransfModule {}
