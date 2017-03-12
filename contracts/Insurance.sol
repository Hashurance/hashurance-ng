pragma solidity ^0.4.8;

import "State.sol";

//
//Insurance contract
//
contract Insurance {
    address public owner;
    address public state;

    uint[] private subscribers;
    /*
    string private glasses = "glasses";
    string private tooth = "tooth";
    */

    mapping (string => uint) private refundRate;
    mapping (uint => bool) private prescriptionExists;

    function Insurance() public {
        owner = msg.sender;
        refundRate["glasses"] = 80;
        refundRate["tooth"] = 50;
    }

    function addSubscriber(uint _subscriber) {
        subscribers.push(_subscriber);
    }

    function declarePrescription(uint subscriber ) public {
        prescriptionExists[subscriber] = true;
    }

    //TODO
    //insurance pays to the med
    function getRefund(string txId, uint amount) public {
        //checks the msg.sender is a med ? means the uid of the subscriber is signed by the state
        /*
        uint rate;
        if (stringsEqual(glasses, prescription)) rate = 80;
        if (stringsEqual(tooth, prescription)) rate = 50;
        uint rate = refundRate[prescription];
        uint value = amount * rate / 100;
        */

        //check the txID is a real one
        //once everything is verified, send the amount
        State state = State(state);
        if (state.validateUID(txId)){
            if (!msg.sender.send(amount)) throw;
        }

        //prescriptionExists[subscriber] = false;

    }


    function stringsEqual(string storage _a, string memory _b) internal returns (bool) {
		bytes storage a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length)
			return false;
		// @todo unroll this loop
		for (uint i = 0; i < a.length; i ++)
			if (a[i] != b[i])
				return false;
		return true;
	}


    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }


}
