import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List } from "../../models";
import { NavParams } from "ionic-angular";//error en la importacion automatica
@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {
  c_list: List;
  c_nombreItem: string = '';
  constructor(public _WishService: WishService, private _navParams: NavParams ) {
    const send_titulo= this._navParams.get('send_titulo');
    this.c_list = new List(send_titulo);
    console.log(this.c_list);

  }
  itemSelected(_list: List) {
    console.log(_list);
  }
  addItem(){

  }
}
