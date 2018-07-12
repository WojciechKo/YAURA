import React, { Component } from 'react';

import Web3 from 'web3';

class Profile extends Component {
  render() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    console.log(web3);
    web3.eth.getAccounts().then(console.log);

    return (
      <div>
        User profile!!!
      </div>
    );
  }
}

export default Profile;
