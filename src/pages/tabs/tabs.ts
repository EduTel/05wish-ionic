
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { PendientesComponent } from "../perdientes/pendientes.component";
import { TerminadoComponent } from '../terminado/terminado.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadoComponent;
  //tab3Root = ContactPage;

  constructor() {

  }
}
