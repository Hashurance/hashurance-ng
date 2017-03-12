var SimpleWallet = artifacts.require("./SimpleWallet.sol");
var Owned = artifacts.require('./Owned.sol');
var State = artifacts.require('./State.sol');
var Insurance = artifacts.require('./Insurance.sol');
var Med = artifacts.require('./Med.sol');

module.exports = function(deployer) {
  deployer.deploy(SimpleWallet);
  deployer.deploy(Owned);
  deployer.deploy(State);
  deployer.deploy(Insurance);
  deployer.deploy(Med);
};

