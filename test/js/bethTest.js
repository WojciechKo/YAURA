const BethAbi = artifacts.require("Beth");

contract('Beth', async ([owner, ...accounts]) => {
  let Beth = undefined;

  beforeEach(async () => {
    if (Beth !== undefined) return;
    Beth = await BethAbi.deployed();
  })

  isRevert = (error) => {
    assert.equal(error.name, 'Error');
    assert.equal(error.message, 'VM Exception while processing transaction: revert');
  }

  describe('ownership', async () => {
    it('contains no ether', async () => {
      const balance = parseFloat(web3.eth.getBalance(Beth.address))
      assert.equal(balance, 0);
    })

    it('changes ownership correctly', async () => {
      const otherOwner = accounts[1];

      assert.equal(await Beth.owner(), owner);

      // Transfers ownership to another account
      let transferOutput = await Beth.transferOwnership(otherOwner);

      let [transferLog] = transferOutput.logs;
      assert.equal(transferLog.event, 'OwnershipTransferred');
      assert.equal(transferLog.args.previousOwner, owner);
      assert.equal(transferLog.args.newOwner, otherOwner);

      assert.equal(await Beth.owner(), otherOwner);

      // Prevents unauthorized ownership transfer
      try {
        await Beth.transferOwnership(owner);
        fail("Should've throw an error");
      }
      catch(err) {
        isRevert(err);
      }
      assert.equal(await Beth.owner(), otherOwner);

      // Only owner can transfer the ownership
      transferOutput = await Beth.transferOwnership(owner, {from: otherOwner});

      [transferLog] = transferOutput.logs;
      assert.equal(transferLog.event, 'OwnershipTransferred');
      assert.equal(transferLog.args.previousOwner, otherOwner);
      assert.equal(transferLog.args.newOwner, owner);

      assert.equal(await Beth.owner(), owner);
    })
  })

  describe('createBet', async () => {
    it('creates a new bet', async () => {
      const description = 'elo elo';
      const options = ['tak', 'nie'];

      const oldCount = parseInt(await Beth.getBetCount());

      const response = await Beth.createBet(
        description,
        options
      )

      expect(response.logs).to.have.length(1);
      const log = response.logs[0];

      expect(log.event).to.equal('NewBet');
      expect(parseInt(log.args.bet_id)).to.equal(oldCount);
      expect(log.args.description).to.equal(description);

      const newCount = parseInt(await Beth.getBetCount());
      expect(newCount).to.equal(oldCount + 1)
    })
  })

  describe('getBet', async () => {
    const description = 'elo elo';
    const options = ['tak', 'nie', 'nie wiem'];

    before(async () => {
      console.log('create a new bet')
      await Beth.createBet(
        description,
        options
      )
    })

    it('returns description and options of the bet with values', async () => {
      const betId = parseInt(await Beth.getBetCount()) - 1;
      //
      // Make some bets
      await Beth.betOnOption(betId, 0, {value: 100});
      await Beth.betOnOption(betId, 0, {value: 50});
      await Beth.betOnOption(betId, 1, {value: 10000});

      console.log('bet_id', betId);
      const bet = await Beth.getBet(betId);

      // Description
      expect(bet[0]).to.include(description)

      // Options
      expect(web3.toAscii(bet[1][0])).to.include(options[0])
      expect(web3.toAscii(bet[1][1])).to.include(options[1])
      expect(web3.toAscii(bet[1][2])).to.include(options[2])

      // OptionValues
      expect(parseInt(bet[2][0])).to.equal(150)
      expect(parseInt(bet[2][1])).to.equal(10000)
      expect(parseInt(bet[2][2])).to.equal(0)
    })
  })

  describe('betOnOption', async () => {
    before(async () => {
      await Beth.createBet(
        'Kto wygra mecz?',
        ['Polska', 'Niemcy']
      )
    })

    it('places a bet on selected option', async () => {
      // Given
      const oldBalance = parseFloat(web3.eth.getBalance(Beth.address))
      const betId = parseInt(await Beth.getBetCount()) - 1;
      const optionId = 0;
      const value = 523;

      // When
      const response = await Beth.betOnOption(betId, optionId, {value: value});
      console.log('bet_id', betId);

      // Then emits an Event
      expect(response.logs).to.have.length(1);
      const log = response.logs[0];

      expect(log.event).to.equal('NewBetOnOption');
      expect(parseInt(log.args.bet_id)).to.equal(betId);
      expect(parseInt(log.args.option_id)).to.equal(optionId);
      expect(parseInt(log.args.value)).to.equal(value);

      // Then changes the balance of the Contract
      expect(parseFloat(web3.eth.getBalance(Beth.address))).to.equal(oldBalance + value);
    })
  })
})
