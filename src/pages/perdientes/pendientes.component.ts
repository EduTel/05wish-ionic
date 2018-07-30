import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List } from "../../models";
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendiente.component.html'
})
export class PendientesComponent{
  constructor(public _WishService: WishService ){

  }
  itemSelected(_list: List ){
    console.log(_list);
  }
}
