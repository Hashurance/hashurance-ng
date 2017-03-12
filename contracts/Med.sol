pragma solidity ^0.4.8;

import "./Insurance.sol";

contract Med {
    address public owner;
    string public txId;

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

    //txID is the transaction ID : something encrypted by the personal, with the insurance pubkey
    function requestForRefund(string txId, address _insurance) public payable {
        //get the personal uid : decrypt txID
        Insurance ins = Insurance(_insurance);
        ins.getRefund(txId, 100);
    }

    function getPaid(string _txId) public payable {
        txId = _txId;
    }

}
