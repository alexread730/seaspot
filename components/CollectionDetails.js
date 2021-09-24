import Image from 'next/image';

export default function CollectionDetails(props) {
  console.log(props)
  return (
    <div 
      className="block grid md:grid-cols-1 md:grid-cols-3 gap-4 bg-purple-300 border-4 rounded-md border-gray-600 shadow-md py-6 px-8 text-center"
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
        <h3 className="text-2xl">{props.collection.name}</h3>
        <p className="text-purple-900 font-bold text-2xl md:text-xl"><span className="text-gray-700 font-normal text-lg">Floor Price: </span>{props.collection.stats.floor_price}</p>
        <p className="text-purple-900 font-bold text-2xl md:text-xl"><span className="text-gray-700 font-normal text-lg">Volume: </span>{Math.round(props.collection.stats.total_volume)} ETH</p>
      </div>
    </div>
  )
}
