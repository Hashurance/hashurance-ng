pragma solidity ^0.4.8;


contract State {
    address[] private citizens;
    address[] private meds;
    address public owner;

    function State() public {
        owner = msg.sender;
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

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

}
