import React, { Component } from 'react';

import Web3 from 'web3';
import Migrations from '../../abi/Migrations';

class Profile extends Component {
  render() {
    const abi = Migrations.abi;
    const address = "0x8cdaf0cd259887258bc13a92c0a6da92698644c0";

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const MigrationsContract = new web3.eth.Contract(abi, address);

    MigrationsContract.methods.owner().call().then(console.log);

    console.log(MigrationsContract);

    return (
      <div>
        User profile!!!
      </div>
    );
  }
}

export default Profile;
