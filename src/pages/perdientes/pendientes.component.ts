import { NavController } from 'ionic-angular';
import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List } from "../../models";
import { AddPage } from '../add/add.component';
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendiente.component.html'
})
export class PendientesComponent{
  constructor(public _WishService: WishService,private navCtr: NavController ){

  }
  itemSelected(_list: List ){
    console.log(_list);
  }
  addList(){
    this.navCtr.push(AddPage);
  }
}
