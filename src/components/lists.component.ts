import { List } from './../models/list.model';
import { NavController } from 'ionic-angular';
import { WishService } from './../services/wish.service';
import { AddPage } from './../pages/add/add.component';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './lists.component.html',
  //styleUrls: ['./name.component.scss']
})
export class ListasComponent implements OnInit {
  @Input() c_finish:boolean;
  constructor(public _WishService: WishService, private navCtr: NavController){

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
}
