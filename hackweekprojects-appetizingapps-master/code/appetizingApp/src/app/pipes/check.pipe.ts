import { Pipe, PipeTransform } from '@angular/core';
import { Business } from "../types/business";

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(favs: Business[], id: string): boolean {
    if (!favs) { return false }

    for( let i = 0; i < favs.length; i++){
      if (favs[i].uid === id) { return true; }
    }
    
    return false;
  }

}
