var Beth = artifacts.require("./Beth.sol");

module.exports = function(deployer) {
  Beth.deployed()
    .then(function(instance) {
      instance.createBet(
        web3.fromAscii('Poland - Brasil'),
        ['Poland', 'Brasil'].map(web3.fromAscii)
      )
    })
}
