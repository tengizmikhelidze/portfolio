import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../environments/environment";

@Pipe({
  name: 'Image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string): unknown {
    return environment.apiUrl + value;
  }

}
