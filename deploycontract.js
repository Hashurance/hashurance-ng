var Web3 = require('Web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var med_sol_medContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"log","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"recover","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"add","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"value","type":"address"}],"name":"LogRecover","type":"event"}]);
var med_sol_med = med_sol_medContract.new(
   {
     from: web3.eth.accounts[0],
     data: '0x6060604052341561000c57fe5b5b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503073ffffffffffffffffffffffffffffffffffffffff167fb123f68b8ba02b447d91a6629e121111b7dd6061ff418a60139c8bf00522a28460405180905060405180910390a25b5b6103ef806100a56000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806351973ec9146100515780638da5cb5b146100a3578063c2bf17b0146100f5575bfe5b341561005957fe5b61006161017f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100ab57fe5b6100b36101a5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100fd57fe5b61013d60048080356000191690602001909190803560ff1690602001909190803560001916906020019091908035600019169060200190919050506101cb565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600185858585604051806000526020016040526000604051602001526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000866161da5a03f1151561024857fe5b505060206040510351600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fb123f68b8ba02b447d91a6629e121111b7dd6061ff418a60139c8bf00522a28460405180905060405180910390a23373ffffffffffffffffffffffffffffffffffffffff167f67afe429cb342713e576100c15035843b6f14efbb46c76cd088490cd5eba667f600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505b9493505050505600a165627a7a723058206f07d0eb587a692df0fcd6162c7fcf3dff511f5775904771c4b68b94a26f2db10029',
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
