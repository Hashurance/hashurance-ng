pragma solidity ^0.4.2;

import "./Owned.sol";

contract Insurance is Owned{

    address[] private subscribers;

    mapping (string => uint) refundRate ;

    function Insurance() public {
        Owner();
        refundRate["glasses"] = 80;
        refundRate["glasses"] = 50;
    }

    function addSubscriber(address _subscriber) {
        subscribers.push(_subscriber);
    }

    //TODO
    function getRefund(string _prescription, address _med, uint amount) public {
    }

}
