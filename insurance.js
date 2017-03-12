
var Web3 = require('Web3');

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/9giEexBNhzWTMt3BcBMA"));

}
//
// const EthereumTx = require('ethereumjs-tx')
// const privateKey = Buffer.from('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')
//
// const txParams = {
//   nonce: '0x00',
//   gasPrice: '0x09184e72a000',
//   gasLimit: '0x2710',
//   to: '0x0000000000000000000000000000000000000000',
//   value: '0x00',
//   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
//   // EIP 155 chainId - mainnet: 1, ropsten: 3
//   chainId: 3
// }
//
// const tx = new EthereumTx(txParams)
// tx.sign(privateKey)
// const serializedTx = tx.serialize()
//
// console.log(serializedTx.toString('hex'))
//
// web3.eth.sendRawTransaction(serializedTx.toString('hex'), function(err, hash) {
//   if (!err)
//     console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
// });


//web3.account.create();

var client;
var doctor;
var insurrance;

web3.eth.getAccounts((error, result) => {
    if (error) return;
    client = result[0];
    doctor = result[1];
    insurance = result[2];
    console.log("client", client);
    console.log("doctor", doctor);
    console.log("insurance", insurance)

    //do the signature of a text
    var hash = web3.sha3('med care !');
    console.log("hash ", hash)
    var signed = web3.eth.sign(insurance,hash);
    console.log('sh3 signature', signed);
    r = signed.substr(0, 66)
    s = '0x' + signed.substr(66, 64)
    v = parseInt(signed.substr(130)) + 27

    var med_sol_medContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"log","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"bytes32"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"recover","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"add","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"value","type":"address"}],"name":"LogRecover","type":"event"}]);
    var med_sol_med = med_sol_medContract.at("0x9c5f071683af18957f0efce851af219c0594f7fb");

    // reverse the message
    var addRet = med_sol_med.recover.sendTransaction(hash, v, r, s, {from: web3.eth.coinbase});

});


var uuidPersonnal = "0x1234567890"

//return string with suffix
function encrypt(_payload){
    return _payload + getRandomIntInclusive(1000000000, 9999999999);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//simulate sending of a transaction between person and med
//needs to provide its uuid (social security number) signed, and encrypted by insurance pubkey (todo : to be made by the state)
//signs the transaction (by default in eth)
//provides a txId : encrypted with the insurance pubkey (only insurance can decrypt and verify the uid is 'real')
function personnalToMed(_personalAddress, _medAddress){
    var txId = encrypt(uuidPersonnal);
    var hash = web3.sha3(uuidPersonnal);
    var signed = web3.eth.sign(_personalAddress,hash);
    console.log('sh3 signature', signed);

    web3.eth.sendTransaction({from:_personalAddress, to: _medAddress, value:100})
}


//simulate med requesting insurance to get paid/refunded
//needs to sign the transaction with its own pubkey, to ensure med is the 'real' one (by default in eth)
//needs to provide the txID, without being able to modify it
//-> this could be inside smart contract
function medToInsurance(){

}

//simulate insurance verifying request from med is ok : the txID, once uncrypted, reveals a real uid of personnal
//-> this can be done inside the smart contract
function insuranceRefund(){

}

//ULTIMATE FEATURE
//being able to provide the insurance the information of : the personal is really assured by you
//but without saying who is the personal really (don't provide the uid)
function hiddeUID(){

}
