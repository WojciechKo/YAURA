import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

function zipArrays(a, b) {
  const arr = [];
  for (const key in a) arr.push([a[key], b[key]]);
  return arr;
}

function buildOption(index, option, value) {
  return {
    id: index,
    description: web3.utils.toAscii(option),
    value: parseInt(value)
  };
}

export function buildBet(betId, bet) {
  return {
    id: betId,
    description: web3.utils.toAscii(bet[0]),
    options: zipArrays(bet[1], bet[2]).map((args, index) => buildOption(index, ...args)),
  };
}
