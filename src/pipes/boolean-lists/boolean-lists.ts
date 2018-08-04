import { List } from './../../models/list.model';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the BooleanListsPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'booleanLists',
  pure: false
})
export class BooleanListsPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(_list: List[], _tipo=false) {
    return _list.filter(_values=>{
      return _values.terminada===_tipo;
    })
  }
}
