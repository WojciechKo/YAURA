import React, { Component } from 'react';

import Web3 from 'web3';
import Beth from '../../abi/Beth';

class Profile extends Component {
  state = {
    walletId: undefined
  }

  constructor(props) {
    super(props);
    const abi = Beth.abi;
    const address = process.env.REACT_APP_BETH_ADDRESS;

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

    web3.currentProvider.publicConfigStore.on('update', () => {
      web3.eth.getAccounts((_sth, accounts) => {
        const walletId = accounts[0];

        if (this.state.walletId !== walletId) {
          this.setState({ walletId: walletId });
        }
      });
    });

    const contract = new web3.eth.Contract(abi, address);

    web3.eth.getAccounts((_sth, accounts) => {
      const walletId = accounts[0];

      if (this.state.walletId !== walletId) {
        this.setState({ walletId: walletId });
      }
    });
  }

  render() {
    return (
      <div>
        User profile!!!
        {this.state.walletId}
      </div>
    );
  }
}

export default Profile;
