import { Component } from "@angular/core";
import { WishService } from "../../services/wish.service";
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendiente.component.html'
})
export class PendientesComponent{
  constructor(public _WishService: WishService ){

  }
}
