import {Injectable} from "@angular/core";

const sha256 = require('sha256');

@Injectable()
export class StateService {

  generateUID(id: string): string {
    return sha256(id + new Date());
  }

  validateClient(uid: string): boolean {
    return true;
  }
}
