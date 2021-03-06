import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List, ListItem } from "../../models";
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
    if( this._navParams.get('lista') ){
      this.c_list = this._navParams.get('lista');
    }else{
      this.c_list = new List(send_titulo);
      console.log(this.c_list);
      this._WishService.addList(this.c_list);
    }
  }
  itemSelected(_list: List) {
    console.log(_list);
  }
  addItem(){
    if (this.c_nombreItem.length===0 ){
      return;
    }
    const nuevoItem = new ListItem(this.c_nombreItem);
    this.c_list.items.push(nuevoItem);
    console.log(this.c_nombreItem);
    this.c_nombreItem="";
    this._WishService.saveStorage();
  }
  updatateTask(_item: ListItem){
    _item.completado = !_item.completado;
    const pendientes = this.c_list.items.filter(items=>{
      return !items.completado
    }).length;
    if( pendientes===0 ){
      this.c_list.terminada = true;
      this.c_list.terminadaEn = new Date();
    }else{
      this.c_list.terminada = false;
      this.c_list.terminadaEn = null;
    }
    this._WishService.saveStorage();
  }
  deleteItem(position:number){
    console.log(position);
    this.c_list.items.splice(position,1);
    this._WishService.saveStorage();
  }
}
