import {Injectable} from "@angular/core";
const sha256 = require("sha256");
import {SharedService} from '../../services/shared.service';
import * as myGlobals from '../../globals';

@Injectable()
export class InsuranceService {

  constructor(private ss: SharedService) {
    ss.accounts = myGlobals.web3.eth.accounts;
  }

  createContract(userId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('0xf77bf3af856ddab8ab86d209629330cf13d26b95');
    });
  }

  getRefund(uid : string) : number {
    return 100;
  }
}
