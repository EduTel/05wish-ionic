import { Injectable } from "@angular/core";
import { ListItem, List } from "../models";

@Injectable()
export class WishService{
  lists: List[]=[];
  constructor(){
    console.warn("hola WishService");
    const lista1 = new List("Libros leer");
    const lista2 = new List("Libros comprar");
    this.lists.push(lista1, lista2);
    console.log(this.lists);
  }
}
