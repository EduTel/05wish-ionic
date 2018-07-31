import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
import { List } from "../../models";
@Component({
  selector: 'page-add',
  templateUrl: 'add.component.html'
})
export class AddPage {
  constructor(public _WishService: WishService) {

  }
  itemSelected(_list: List) {
    console.log(_list);
  }
}
