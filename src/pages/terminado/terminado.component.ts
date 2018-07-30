import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List } from "../../models";
@Component({
  selector: 'page-terminado',
  templateUrl: 'terminado.component.html'
})
export class TerminadoComponent {
  constructor(public _WishService: WishService) {

  }
  itemSelected(_list: List) {
    console.log(_list);
  }
}
