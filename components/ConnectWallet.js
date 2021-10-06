const fetcher = (...args) => fetch(...args).then((res) => res.json());

import React, { useContext, useState } from "react";
import useSWR from "swr";
import { AddressContext } from './AddressContext'

export default function ConnectWallet(props) {
  const addressContext = useContext(AddressContext);
  
  function openDeepLink() {
    window.open("https://metamask.app.link/dapp/seaspot.vercel.app")
  }
  
  }
  
  return (
    <div className="grid w-full md:w-1/5 mx-auto px-6">
      <AddressContext.Consumer>
        {({numOne, numTwo}) => (
          <button className="mt-16 py-5 px-8 bg-blue-800 border-2 border-black shadow-sm rounded-md text-white font-bold" onClick={props.isMobile ?  openDeepLink : addressContext.getEthAddress}>
            <div className="relative w-max mx-auto">
              <svg className="MuiSvgIcon-root h-8 w-min absolute hidden md:block -left-0 -bottom-1 " focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill="white"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
              <div className=" pl-0 md:pl-10">
                Connect Wallet
              </div>
            </div>
          </button>
        )}
      </AddressContext.Consumer>
    </div>
  )
}
