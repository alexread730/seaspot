import Head from "next/head";
import Header from "../components/Header.js";
import CollectionsList from "../components/CollectionsList";
import ConnectWallet from "../components/ConnectWallet";
import React, { useState, useEffect } from "react";
import { AddressContext } from "../components/AddressContext";

export default function Home() {
  const [ethAddress, setEthAddress] = useState('bit');
  const [isMobile, setIsMobile] = useState(false);
  
  const [getEthAddress, setEthAdressGetter] = useState(() => () => {
    if (window.ethereum) {
      const res = window.ethereum.request({ method: 'eth_requestAccounts' });
      res.then((response) => {
        const address = response[0];
        setEthAddress(address);
        setAddressContextValues({ethAddress: address, getEthAddress: getEthAddress })
      });  
    }
  });
  
  useEffect(() => {
    getEthAddress()
  }, []);
  
  const [addressContextValue, setAddressContextValues] = useState({ethAddress: ethAddress, getEthAddress: getEthAddress })
  
  return (
    <div className="bg-gradient-to-b from-blue-400 to-green-200 min-h-screen min-w-full container mx-auto py-20">
      <Head>
        <title>SeaSpot</title>
        <meta name="description" content="User Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AddressContext.Provider value={addressContextValue} >
        <ConnectWallet />
        <CollectionsList />
      </AddressContext.Provider>
      <footer></footer>
    </div>
  );
}
