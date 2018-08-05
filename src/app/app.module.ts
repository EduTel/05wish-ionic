import { ListasComponent } from './../components/lists.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//paginas
//import { AboutPage } from '../pages/about/about';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PendientesComponent } from "../pages/perdientes/pendientes.component";
import { TerminadoComponent } from "../pages/terminado/terminado.component";
import { AddPage } from "../pages/add/add.component";

//pipes
import { BooleanListsPipe } from './../pipes/boolean-lists/boolean-lists';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//sevices
import { WishService } from "../services/wish.service";
@NgModule({
  declarations: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    TabsPage,
    PendientesComponent,
    TerminadoComponent,
    AddPage,
    BooleanListsPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //AboutPage,
    //ContactPage,
    //HomePage,
    TabsPage,
    PendientesComponent,
    TerminadoComponent,
    AddPage,
    ListasComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
