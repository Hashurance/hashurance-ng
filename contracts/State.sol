pragma solidity ^0.4.2;

import "./Owned.sol";

contract State is Owned {
    address[] private citizens;
    address[] private meds;

    function State() public {
        Owner();
    }

    function addCitizen(address _citizen) onlyOwner public {
        citizens.push(_citizen);
    }

    function addMed(address _med) onlyOwner public {
        meds.push(_med);
    }

    // to be modified, choice of the inputs to use
    function getUUID(address _citizen) public returns (bytes32) {
        return sha3(_citizen, this);
    }
}
