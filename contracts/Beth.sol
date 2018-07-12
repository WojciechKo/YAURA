pragma solidity ^0.4.23;

contract Beth {
    address owner;

    constructor() public {
      owner = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }
}
