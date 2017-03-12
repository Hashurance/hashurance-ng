pragma solidity ^0.4.8;

//
//Insurance contract
//
contract Insurance {
    address public owner;

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
    function getRefund(uint subscriber, string prescription, address _med, uint amount) public {
        //checks the msg.sender is a med ? means the uid of the subscriber is signed by the state
        /*
        uint rate;
        if (stringsEqual(glasses, prescription)) rate = 80;
        if (stringsEqual(tooth, prescription)) rate = 50;
        */
        uint rate = refundRate[prescription];
        uint value = amount * rate / 100;
        if (msg.sender.send(value)) throw;
        prescriptionExists[subscriber] = false;
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

//
//State contract
//
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

    //verify
    function validateUID(uint uid) public returns (bool) {

    }


    modifier onlyOwner {
        if (msg.sender != owner) throw;
        _;
    }

}
