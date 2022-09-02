import { HttpParams } from '@angular/common/http';

export abstract class Helpers {
  static toHttpParams(o: Object): HttpParams {
    const array = Object.getOwnPropertyNames(o);
    const arrayValues = Object.getOwnPropertyDescriptors(o)
    console.log(arrayValues);

    console.log();

    let paramObject = new HttpParams();
    let index = 0;
    array.forEach(propName => {
      let value: any = arrayValues[array[index]].value
      if (value === undefined) {

        value = '';
      }
      paramObject = paramObject.set(propName, value.toString());
      index++;
    });

    return paramObject;
  }

}
