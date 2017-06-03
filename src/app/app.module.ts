import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {ExtratoPage} from '../pages/extrato/extrato';
import {TransferenciaPage} from '../pages/transferencia/transferencia';
import {PagamentoPage} from '../pages/pagamento/pagamento';
import {ConfirmaTransferenciaPage} from '../pages/confirma-transferencia/confirma-transferencia';
import {ConfirmaPagamentoPage} from '../pages/confirma-pagamento/confirma-pagamento';
import {FaleConoscoPage} from '../pages/fale-conosco/fale-conosco';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        LoginPage,
        HomePage,
        ExtratoPage,
        PagamentoPage,
        TransferenciaPage,
        ConfirmaTransferenciaPage,
        ConfirmaPagamentoPage,
        FaleConoscoPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage,
        HomePage,
        ExtratoPage,
        TransferenciaPage,
        PagamentoPage,
        ConfirmaTransferenciaPage,
        ConfirmaPagamentoPage,
        FaleConoscoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
