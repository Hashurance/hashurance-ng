pragma solidity ^0.4.8;

import "./State.sol";
import "./strings.sol";

//
//Insurance contract
//
contract Insurance {
    using strings for *;

    address public owner;
    address public state;

    string[] private subscribers;
    /*
    string private glasses = "glasses";
    string private tooth = "tooth";
    */


    function Insurance() public {
        owner = msg.sender;
    }

    function addSubscriber(string _subscriber) {
        subscribers.push(_subscriber);
    }


    //insurance pays to the med
    function getRefund(string txId, uint amount) public {
        //TODO : checks the msg.sender is a med ? means the uid of the subscriber is signed by the state

        //check the txID is a real one
        //once everything is verified, send the amount
        State state = State(state);
        if (state.validateUID(txId)){
            if (!msg.sender.send(amount)) throw;
        }

        //prescriptionExists[subscriber] = false;
    }

    function getTxID(string uid) public returns (string) {
        var s = uid.toSlice().concat(bytes32ToString(now).toSlice());
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
        if (msg.sender != owner) throw;
        _;
    }


}
