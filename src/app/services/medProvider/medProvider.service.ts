import {Injectable} from "@angular/core";
import {SharedService} from '../../services/shared.service';
import * as myGlobals from '../../globals';

@Injectable()
export class MedProviderService {

  constructor(private ss: SharedService) {
    ss.accounts = myGlobals.web3.eth.accounts;
  }

  insuranceAddress(userId: string): Promise<string> {
    var that = this;
    var insuranceAdress = myGlobals.Insurance.deployed().then(function(insurance){
      return insurance.address;
    });
  }


  getRefund(uid : string) : number {
    return 100;
  }
}
