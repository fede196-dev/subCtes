import { HttpParams } from '@angular/common/http';

export abstract class Helpers {
    static toHttpParams(o: Object): HttpParams {
        const array = Object.getOwnPropertyNames(o);
        let paramObject = new HttpParams();
        let index = 0;
        array.forEach(propName => {
            let value: any =  [array[index]];
            if (value === undefined || isNaN(value)) {
                value = 0;
            }
            paramObject = paramObject.set(propName, value.toString());

            index++;
        });

        return paramObject;
    }

}
