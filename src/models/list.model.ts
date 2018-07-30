import { ListItem } from './list-item.medelo';

export class List{
  id         : number;
  titulo     : string;
  cradaEn    : Date;
  terminadaEn: Date;
  terminada  : boolean;
  items      : ListItem[];
  constructor(_titulo:string){
    this.titulo = _titulo;
    this.terminada= false;
    this.cradaEn= new Date();
    this.items = [];
    this.id = new Date().getTime();
  }
}
