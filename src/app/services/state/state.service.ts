import {Injectable} from "@angular/core";
import {SharedService} from '../../services/shared.service';
import * as myGlobals from '../../globals';

@Injectable()
export class StateService {

  constructor(private ss: SharedService) {
     ss.accounts = myGlobals.web3.eth.accounts;
   }

  generateUID(id: string): Promise<any> {
      var that = this;
      return new Promise((resolve, reject) => {
        myGlobals.State.deployed().then(function(state){
          try{
              var txHash = state.getTempUID(id, {from: that.ss.accounts[0]});
              resolve(txHash);
          }catch (e) {
            reject(e);
          }
        });
      });
  }

  validateClient(uid: string): boolean {
    return true;
  }
}
