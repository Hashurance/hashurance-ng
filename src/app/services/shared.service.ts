import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  // Somme global variables of the communication service to the rpc node
  accounts:any
  has_errors: string
  transfer_success:boolean
  balanceInEther: number
  // depositFunds: Function

  contract_address:string
  contract_abi:any

  ourEvents:any[];
  ourDepositEvents:any[];
  withdrawls:any[];
  
  constructor() {}

}
