import { NavController, AlertController } from 'ionic-angular';
import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List } from "../../models";
import { AddPage } from '../add/add.component';

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendiente.component.html'
})
export class PendientesComponent{
  constructor(public _WishService: WishService, private navCtr: NavController, public _alertCtrl: AlertController  ){

  }
  itemSelected(_list: List){
    console.log(_list);
    this.navCtr.push(AddPage,{
      titulo: _list.titulo,
      lista: _list
    });
  }
  addList(){
    const prompt = this._alertCtrl.create({
      title: 'New list',
      message: "name of the list you want to create",
      inputs: [
        {
          name: 'title',
          placeholder: 'Name of the list'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          //handler: data => {
          //  console.log('Cancel clicked');
          //}
        },{
          text: 'Save',
          handler: data => {
            if (data.title.length!==0 ){
              //console.log(data);
              this.navCtr.push(AddPage,{
                send_titulo: data.title
              });
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
