import { Injectable } from "@angular/core";
import { ListItem, List } from "../models";

@Injectable()
export class WishService{
  c_lists: List[]=[];
  constructor(){
    this.loadStorage();
    //console.warn("hola WishService");
    //const lista1 = new List("xx");
    //const lista2 = new List("Libros comprar");
    //this.c_lists.push(lista1);
    //console.log(this.lists);
  }
  addList(_list:List){
    this.c_lists.push(_list);
    this.saveStorage();
  }
  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.c_lists) );
    console.error(this.c_lists);
  }
  loadStorage(){
    if( localStorage.getItem('data') ){
      console.warn("si localstorage");
      this.c_lists = JSON.parse(localStorage.getItem('data')) ;
      console.warn(this.c_lists);
    }else{
      console.warn("no localstorage");
    }
  }
  deleteList(_lista: List){
    console.log("deleteList");
    console.log(_lista.id);
    this.c_lists = this.c_lists.filter(_lists=>{
      return _lists.id!=_lista.id;
    });
    this.saveStorage();
  }
}
