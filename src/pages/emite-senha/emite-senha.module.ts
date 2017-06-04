import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmiteSenhaPage } from './emite-senha';

@NgModule({
  declarations: [
    EmiteSenhaPage,
  ],
  imports: [
    IonicPageModule.forChild(EmiteSenhaPage),
  ],
  exports: [
    EmiteSenhaPage
  ]
})
export class EmiteSenhaPageModule {}
