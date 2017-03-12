import {Injectable} from "@angular/core";

const sha256 = require('sha256');

@Injectable()
export class StateService {

  generateUID(id: string): string {
    return sha256(id + new Date());
  }

  validateClient(uid: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if(uid == 'abc')
        reject('Identifiers do not match');
      else
        resolve();
    });
  }
}
