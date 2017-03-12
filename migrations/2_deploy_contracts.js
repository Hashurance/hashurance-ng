var SimpleWallet = artifacts.require("./SimpleWallet.sol");
var Owned = artifacts.require('./Owned.sol');
var State = artifacts.require('./State.sol');
var Insurance = artifacts.require('./Insurance.sol');
var Med = artifacts.require('./Med.sol');
var Strings = artifacts.require('./strings.sol');

module.exports = function(deployer) {
  deployer.deploy(Strings);
  deployer.deploy(SimpleWallet);
  deployer.deploy(Owned);
  deployer.deploy(State);
  deployer.link(State, Strings);
  deployer.deploy(Insurance);
  deployer.deploy(Med);
};

