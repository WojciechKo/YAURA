import { observable } from 'mobx';

import Web3 from 'web3';
import Beth from '../abi/Beth';

class MainStore {
  @observable
  walletId = undefined;

  @observable
  owner = undefined;

  @observable
  bets = [];

  @observable
  lastBetId = undefined;

  updateOwner = (newOwner) => {
    this.beth.methods.transferOwnership(newOwner).send()
      .on('error', () => { console.log('Something failed'); })
      .then((receipt) => {
        this.owner = receipt.events.OwnershipTransferred.returnValues.newOwner;
      });
  }

  getBets = (page = 0, perPage = 10) => {
    console.log('call this.getBets 3');
    const { lastBetId } = this;

    const highestId = Math.max(lastBetId - (page * perPage), 0);
    const lowestId = Math.max(highestId - perPage, 0);

    const length = highestId - lowestId + 1;

    const ids = Array.from({ length }, (v, k) => highestId - k);

    console.log('Bet ids:', ids);

    ids.forEach((id) => {
      this.beth.methods.getBet(id).call().then((bet) => {
        this.bets[lastBetId - id] = {
          id,
          description: this.web3.utils.toAscii(bet[0]),
          options: bet[1].map(this.web3.utils.toAscii),
        };
      });
    });
  }

  createBet = (description, options) => {
    this.beth.methods.createBet(
      this.web3.utils.fromAscii(description),
      options.map(this.web3.utils.fromAscii)
    ).send()
      .then(response => console.log(response));
  }

  constructor() {
    const bethAddress = process.env.REACT_APP_BETH_ADDRESS;
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    this.beth = new this.web3.eth.Contract(Beth.abi, bethAddress);
    window.web = this.web3;
    window.beth = this.beth;

    this.setupChangeWalletListener();
    this.updateWalletId();
  }

  setupChangeWalletListener = () => {
    this.web3.currentProvider.publicConfigStore.on('update', this.updateWalletId);
  }

  updateWalletId = () => {
    this.web3.eth.getAccounts((_error, accounts) => {
      [this.walletId] = accounts;
      this.beth.options.from = this.walletId;
    }).then(this.updateBetOwner())
      .then(this.updateLastBetId());
  }

  updateBetOwner = () => {
    console.log('call this.updateBetOwner 1');
    return this.beth.methods.owner().call()
      .then((response) => {
        console.log('then from this.updateBetOwner 1');
        this.owner = response;
      });
  }

  updateLastBetId = () => {
    console.log('call this.updateLastBetId 2');
    return this.beth.methods.getBetCount().call()
      .then((response) => {
        console.log('then from this.updateLastBetId 2');
        console.log('updateLastBetId', response);
        this.lastBetId = Number(response) - 1;
      })
      .then(this.getBets);
  }
}

const mainStore = new MainStore();
export default mainStore;
