pragma solidity ^0.4.8;

contract Med {
    address public owner;

    function Med(){
        owner = msg.sender;
        LogAddress(this);
    }

    address public log;

    //recover address used for the signature
    function recover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address) {
        log = ecrecover(hash, v, r, s);
        LogAddress(log);
        LogRecover(msg.sender, log);
        return log;
    }

    event LogAddress(address indexed add);
    event LogRecover(address indexed _from, address value);
}
