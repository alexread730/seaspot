const fetcher = (...args) => fetch(...args).then((res) => res.json());

import useSWR from "swr";
import CollectionDetails from "./CollectionDetails";

export default function CollectionsList() {
  const apiUrl = "https://api.opensea.io/api/v1/collections?offset=0&limit=100&asset_owner=0x453142d204dB73EeF447C763B48048DA982573D0";
  
  const { data, error } = useSWR(apiUrl, fetcher);
  
  let content;
  if (error) {
    content = <div>failed to load</div>
  }
  
  if (!data) {
    content = <div className="col-span-3 flex justify-center"><div className="animate-spin rounded-full border-4 border-dotted border-blue-500 h-24 w-24"></div></div>
  } else {
    content = data.map((collection) => { return (
        <CollectionDetails collection={collection} key={collection.slug}/>
      )}
    )
  }
  
  // render data
  return <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 container mx-auto mt-20 px-6">{content}</div>;
}
