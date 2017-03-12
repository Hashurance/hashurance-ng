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
    var that = this;
    return new Promise((resolve, reject) => {
      let now = new Date();
      //return sha256(userId + " - " + now);
      myGlobals.Insurance.deployed().then(function(insurance){
        var addressStore = insurance.address;
        try{
            var txHash = insurance.addSubscriber(userId, {from: that.ss.accounts[0]});
            resolve(addressStore);
        }catch (e) {
          reject(e);
        }
      });
    });
  }

  getRefund(uid : string) : number {
    return 100;
  }
}
