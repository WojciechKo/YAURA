pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import './Ownable.sol';

contract Beth is Ownable {
  struct Bet {
    string description;
    bytes32[] options;
  }

  Bet[] public bets;

  function createBet(string description, bytes32[] options) public returns(uint) {
    return bets.push(Bet(description, options)) - 1;
  }

  function getBet(uint index) public constant returns(string, bytes32[]) {
    return (bets[index].description, bets[index].options);
  }

  function getBetCount() public constant returns(uint) {
    return bets.length;
  }
}
