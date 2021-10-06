import Head from "next/head";
import Header from "../components/Header.js";
import CollectionsList from "../components/CollectionsList";
import ConnectWallet from "../components/ConnectWallet";
import React, { useState, useEffect } from "react";
import { AddressContext } from "../components/AddressContext";

export default function Home() {
  const [ethAddress, setEthAddress] = useState('null');
  const [isMobile, setIsMobile] = useState(false);
  
  function checkMobile() {
    let lessThanMobileWidth = window.innerWidth < 768;
    setIsMobile(lessThanMobileWidth);
    
    if (lessThanMobileWidth) {
      getEthAddress();  
    }
  }
  
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
    checkMobile();
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
        {ethAddress.length >= 40 || ethAddress.length <= 42 ? false : <ConnectWallet isMobile={isMobile}/>}
        <CollectionsList />
      </AddressContext.Provider>
      <footer></footer>
    </div>
  );
}
