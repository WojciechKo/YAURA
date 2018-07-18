import { observable } from 'mobx';

import Web3 from 'web3';
import Beth from '../abi/Beth';

class MainStore {
  @observable
  walletId = undefined;

  @observable
  bethOwner = undefined;

  constructor() {
    const bethAddress = process.env.REACT_APP_BETH_ADDRESS;
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    this.beth = new this.web3.eth.Contract(Beth.abi, bethAddress);

    this.setupChangeWalletListener();
    this.updateWalletId();
    this.updateBetOwner();
  }

  setupChangeWalletListener = () => {
    this.web3.currentProvider.publicConfigStore.on('update', this.updateWalletId);
  }

  updateWalletId = () => {
    this.web3.eth.getAccounts((_error, accounts) => {
      this.walletId = accounts[0];
      this.beth.options.from = this.walletId;
    });
  }

  updateBetOwner = () => {
    this.beth.methods.owner().call()
      .then(response => this.bethOwner = response);
  }
}

export const mainStore = new MainStore();
