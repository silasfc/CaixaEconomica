import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmaPagamentoPage } from './confirma-pagamento';

@NgModule({
  declarations: [
    ConfirmaPagamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmaPagamentoPage),
  ],
  exports: [
    ConfirmaPagamentoPage
  ]
})
export class ConfirmaPagamentoPageModule {}
