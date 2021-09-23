import Image from 'next/image';

export default function CollectionDetails(props) {
  console.log(props)
  return (
    <div 
      className="m-5 border-4 rounded-md border-gray-600 shadow-md pt-6 pl-8 pr-8 pb-6 w-full block grid grid-cols-3 gap-4 bg-purple-300"
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
      <div className="col-span-2">
        <h3 className="text-2xl">{props.collection.name}</h3>
        <p className="text-purple-900 font-bold text-2xl"><span className="text-gray-700 font-normal text-lg">Floor Price: </span>{props.collection.stats.floor_price}</p>
        <p className="text-purple-900 font-bold text-2xl"><span className="text-gray-700 font-normal text-lg">Volume: </span>{Math.round(props.collection.stats.total_volume)} ETH</p>
      </div>
    </div>
  )
}
