pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import './Ownable.sol';

contract Beth is Ownable {
  event NewBet(
    uint indexed bet_id,
    string description
  );

  event NewBetOnOption(
    uint indexed bet_id,
    uint indexed option_id,
    uint value
  );

  struct Bet {
    string description;
    Option[] options;
  }

  struct Option {
    bytes32 description;
    uint valuesCount;
    mapping(uint => OptionValue) values;
  }

  struct OptionValue {
    address user;
    uint amount;
  }

  Bet[] public bets;

  function createBet(string description, bytes32[] option_descriptions) public {
    uint bet_id= bets.length;
    bets.length++;
    Bet storage bet = bets[bet_id];

    bet.description = description;

    uint arrayLength = option_descriptions.length;
    for (uint i=0; i < arrayLength; i++) {
      bet.options.push(Option(option_descriptions[i], 0));
    }

    emit NewBet(bet_id, bet.description);
  }

  function getBet(uint index) public constant returns(string, bytes32[], uint[]) {
    Bet storage bet = bets[index];

    uint optionsCount = bet.options.length;
    bytes32[] memory options = new bytes32[](optionsCount);
    uint[] memory values = new uint[](optionsCount);

    for (uint i=0; i<optionsCount; i++) {
      Option storage option = bet.options[i];

      uint value = 0;
      for (uint j=0; j<option.valuesCount; j++) {
        value += option.values[j].amount;
      }

      values[i] = value;
      options[i] = option.description;
    }
    return (bet.description, options, values);
  }

  function getBetCount() public constant returns(uint) {
    return bets.length;
  }

  function betOnOption(uint bet_id, uint option_id) public payable {
    Option storage option = bets[bet_id].options[option_id];
    uint value_index = option.valuesCount;
    option.values[value_index] = OptionValue(msg.sender, msg.value);
    option.valuesCount++;

    emit NewBetOnOption(bet_id, option_id, msg.value);
  }
}
