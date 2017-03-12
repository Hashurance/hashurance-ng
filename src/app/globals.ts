'use strict';
let Web3  = require('web3')

var web3Instance  = new Web3();
console.log(web3Instance);
var providerInstance = new web3Instance.providers.HttpProvider('http://localhost:8545')
web3Instance.setProvider(providerInstance);

var jsonC = require("../../build/contracts/SimpleWallet.json");
var contract = require("truffle-contract");
var SimpleWalletInstance :any = contract(jsonC)

var jsonState = require("../../build/contracts/State.json");
var contractTruffleState = require("truffle-contract");
var StateContract :any = contractTruffleState(jsonState)

var jsonInsurance = require("../../build/contracts/Insurance.json");
var contractTruffleInsurance = require("truffle-contract");
var InsuranceContract :any = contractTruffleInsurance(jsonInsurance)


StateContract.setProvider(providerInstance);
InsuranceContract.setProvider(providerInstance);
SimpleWalletInstance.setProvider(providerInstance)

export var web3=web3Instance;
export var SimpleWallet=SimpleWalletInstance
export var State=StateContract;
export var Insurance=InsuranceContract;

