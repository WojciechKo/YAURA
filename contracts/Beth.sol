pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import './Ownable.sol';

contract Beth is Ownable {
  struct Option {
    bytes32 description;
    mapping(address => uint) values;
  }

  struct Bet {
    string description;
    Option[] options;
  }

  Bet[] public bets;

  function createBet(string description, bytes32[] option_descriptions) public returns(uint) {
    uint bet_id= bets.length;
    bets.length++;
    Bet storage bet = bets[bet_id];

    bet.description = description;

    uint arrayLength = option_descriptions.length;
    for (uint i=0; i < arrayLength; i++) {
      bet.options.push(Option(option_descriptions[i]));
    }

    return bet_id;
  }

  function getBet(uint index) public constant returns(string, bytes32[]) {
    Bet memory bet = bets[index];

    uint arrayLength = bet.options.length;
    bytes32[] memory options = new bytes32[](arrayLength);

    for (uint i=0; i<arrayLength; i++) {
      options[i] = bet.options[i].description;
    }
    return (bet.description, options);
  }

  function getBetCount() public constant returns(uint) {
    return bets.length;
  }
}
