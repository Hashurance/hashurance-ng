pragma solidity ^0.4.2;

contract Owned {

    address private owner;
    
    function Owner() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner(){
        if(msg.sender != owner) throw;
        _;
    }

}