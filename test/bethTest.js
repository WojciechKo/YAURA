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
