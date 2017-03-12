import {Injectable} from "@angular/core";
const sha256 = require("sha256");

@Injectable()
export class InsuranceService {

  constructor() {
  }

  createContract(userId: string): string {
    let now = new Date();
    return sha256(userId + " - " + now);
  }

  getRefund(uid : string) : number {
    return 100;
  }
}
