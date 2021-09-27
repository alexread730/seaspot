import Image from 'next/image';

export default function CollectionDetails(props) {
  let volume = props.collection.stats.total_volume;
  if (volume >= 1000) {
    volume = `${(volume / 1000).toFixed(1)}K`
  } else {
    volume = volume.toFixed(1);
  }
  
  return (
    <a href={`https://opensea.io/collection/${props.collection.slug}`} target="_blank"> 
      <div 
        className="block grid md:grid-cols-1 md:grid-cols-3 gap-4 bg-blue-500 bg-opacity-40 border-2 rounded-xl border-blue-900 shadow-lg py-6 px-8 text-center"
        key={props.collection.slug}
      >
        <div className="col-span-1">
          <Image
            src={props.collection.image_url}
            width={100}
            height={100}
            key={props.collection.slug}
            className="rounded-full text-center"
          />
        </div>
        <div className="sm:col-span-2 md:col-span-2 text-center md:text-left">
          <h3 className="text-2xl text-blue-900 font-bold">{props.collection.name}</h3>
          <div className="mt-4 flex md:space-x-4 justify-center md:justify-start">
            <div className="inline-block">
              <div className="text-white font-bold text-2xl md:text-xl relative pl-7 text-left">
                <div className="absolute left-0 -bottom-2 left-0">
                  <Image
                    src="/eth.png"
                    width={35}
                    height={35}
                    key={props.collection.slug}
                  />
                </div>
                {props.collection.stats.floor_price.toFixed(2)}
              </div>
              <p className="text-gray-900 font-normal text-lg text-center pl-7 md:pl-0">
                Floor Price
              </p>
            </div>
            <div className="inline-block">
              <div className="text-white font-bold text-2xl md:text-xl relative pl-7 text-left">
                <div className="absolute left-0 -bottom-2 -left-0">
                  <Image
                    src="/eth.png"
                    width={35}
                    height={35}
                    key={props.collection.slug}
                  />
                </div>
                {volume}
              </div>
              <p className="text-gray-900 font-normal text-lg text-left pl-4 md:pl-3">
                Volume
              </p>
            </div>
          </div>

        </div>
      </div>
    </a>
  )
}
