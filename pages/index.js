import Head from "next/head";
import Header from "../components/Header.js";
import CollectionsList from "../components/CollectionsList";
import ConnectWallet from "../components/ConnectWallet";
import React, { Component, useState } from "react";
import { AddressContext } from "../components/AddressContext";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ethAddress: "",
        setEthAddress: this.setEthAddress
      };
      
    this.setEthAddress = this.setEthAddress.bind(this);
  }
  
  setEthAddress = () => {
    const res = window.ethereum.request({ method: 'eth_requestAccounts' });
    res.then((response) => {
      const address = response[0];
      this.setState({ ethAddress: address });
    })
  };

  render () {
    return (
      <div className="bg-gradient-to-b from-blue-400 to-green-200 min-h-screen md:min-w-full sm:min-w-full container mx-auto py-20">
        <Head>
          <title>SeaSpot</title>
          <meta name="description" content="User Dashboard" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <AddressContext.Provider value={this.state} >
          <ConnectWallet />
          <CollectionsList />
        </AddressContext.Provider>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
