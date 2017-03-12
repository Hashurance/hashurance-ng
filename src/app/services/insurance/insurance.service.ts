import {Injectable} from "@angular/core";
const sha256 = require("sha256");

@Injectable()
export class InsuranceService {

  createContract(userId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('0xf77bf3af856ddab8ab86d209629330cf13d26b95');
    });
  }

  getRefund(uid : string) : number {
    return 100;
  }
}
