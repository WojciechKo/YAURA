import { observable } from "mobx"

import Web3 from 'web3';
import Beth from '../abi/Beth';

class MainStore {
  @observable walletId = undefined;
  @observable web3 = undefined;
  @observable beth = undefined;

  constructor() {
    const abi = Beth.abi;
    const address = process.env.REACT_APP_BETH_ADDRESS;
    this.web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    this.beth = new this.web3.eth.Contract(abi, address);

    this.setChangeWalletListener();
    this.updateWalletId();
  }

  setChangeWalletListener = () => {
    this.web3.currentProvider.publicConfigStore.on('update', this.updateWalletId);
  }

  updateWalletId = () => {
    this.web3.eth.getAccounts((_sth, accounts) => {
      const walletId = accounts[0];
      console.log("Old wallet id");
      console.log(this.walletId);
      console.log("Set new wallet id");
      console.log(walletId);

      if (this.walletId !== walletId) {
        console.log("Update walletId");
        this.walletId = walletId;
      }
    });
  }
}

export const mainStore = new MainStore();
