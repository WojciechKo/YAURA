import React, { Component } from 'react';

import Web3 from 'web3';
import Beth from '../../abi/Beth';

class Profile extends Component {
  state = {
    walletId: undefined
  }

  render() {
    const abi = Beth.abi;
    const address = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const contract = new web3.eth.Contract(abi, address);

    web3.eth.getAccounts((_sth, accounts) => {
      this.setState({
        walletId: accounts[0]
      });
    });

    return (
      <div>
        User profile!!!
        {this.state.walletId}
      </div>
    );
  }
}

export default Profile;
