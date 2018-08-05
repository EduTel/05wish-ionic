import { List } from './../models/list.model';
import { NavController } from 'ionic-angular';
import { WishService } from './../services/wish.service';
import { AddPage } from './../pages/add/add.component';

import { Component, OnInit, Input } from '@angular/core';

import { AlertController,ItemSliding } from 'ionic-angular';


@Component({
  selector: 'app-listas',
  templateUrl: './lists.component.html',
  //styleUrls: ['./name.component.scss']
})
export class ListasComponent implements OnInit {
  @Input() c_finish:boolean;
  constructor(public _WishService: WishService, private navCtr: NavController,public _AlertController:AlertController){

  }
  ngOnInit( ): void {

  }
  itemSelected(_list: List){
    console.log(_list);
    this.navCtr.push(AddPage,{
      titulo: _list.titulo,
      lista: _list
    });
  }
  EditNameList(_itemList: List,_ItemSliding:ItemSliding  ) {
    _ItemSliding.close();
    const prompt = this._AlertController.create({
      title: 'Editar',
      message: "Edit the name list",
      inputs: [
        {
          name: 'title',
          placeholder: 'edit',
          value: _itemList.titulo
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: (data) => {
            if(data.title.length !==0 ){
              _itemList.titulo=data.title;
              this._WishService.saveStorage();
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
