const fetcher = (...args) => fetch(...args).then((res) => res.json());

import useSWR from "swr";
import CollectionDetails from "./CollectionDetails";
import { AddressContext } from './AddressContext'
import React, { useContext } from "react";

export default function CollectionsList() {
  const addressContext = useContext(AddressContext);
  const loader = (<div className="col-span-3 flex justify-center"><div className="animate-spin rounded-full border-4 border-dotted border-blue-500 h-24 w-24"></div></div>)
  const addressPresent = addressContext.ethAddress.length > 5;
  let content;
  let collectionSlugs;
  
  const apiUrl = `https://api.opensea.io/api/v1/collections?offset=0&limit=100&asset_owner=${addressContext.ethAddress}`;
  
  const { data: collectionData, error: collectionError } = useSWR(addressPresent ? apiUrl : null, fetcher);
  if (collectionData) {
    collectionSlugs = collectionData.map((collection) => { return collection.slug });
  }
  
  if (collectionError) {
    content = <div>failed to load</div>
  }
  
  if (!addressPresent) {
    return <div></div>
  }
  
  if (!collectionData) {
    content = loader;
  } else {
    content = collectionData.map((collection) => { return (
        <CollectionDetails collection={collection} key={collection.slug}/>
      )}
    )
  }
  
  // render data
  return <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 container mt-16 mx-auto px-6">{content}</div>;
}
