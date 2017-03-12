pragma solidity ^0.4.8;

import "./strings.sol";

//
//State contract
//
contract State {
    using strings for *;
    string public s;

    address[] private citizens;
    address[] private meds;
    address public owner;

    mapping(string => bool) private txIdMap;

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

    //return temporary transactionID
    //add the temp txID to array
    function getTempUID(string _citizen) returns (string) {
        s = _citizen.toSlice().concat(bytes32ToString(now).toSlice());
        txIdMap[s] = true;
        return s;
    }

    //verify txID exists
    //deletes txID of the map
    function validateUID(string txID) public returns (bool) {
        if(txIdMap[txID]) {
            txIdMap[txID] = false;
            return true;
        } else {
            return false;
        }

    }

    //convert a byte32 to string
    function bytes32ToString(uint256 x) constant returns (string) {
    bytes memory bytesString = new bytes(32);
    uint charCount = 0;
    for (uint j = 0; j < 32; j++) {
        byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
        if (char != 0) {
            bytesString[charCount] = char;
            charCount++;
        }
    }
    bytes memory bytesStringTrimmed = new bytes(charCount);
    for (j = 0; j < charCount; j++) {
        bytesStringTrimmed[j] = bytesString[j];
    }
    return string(bytesStringTrimmed);
    }

    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

}
