interface DataCardsProps {
      title: string;
      img: string;
      description: string;
      price: string;
      currency1Img: string;
      currency1: string;
      currency1Price: string;
      currency2Img: string;
      currency2: string;
      currency2Price: number;
      change: number;
}

export default function DataCards({ title, change, img, description, price, currency1, currency1Img, currency1Price, currency2, currency2Img, currency2Price }: DataCardsProps) {
      return (<>
            <div className="min-w-[300px] rounded overflow-hidden shadow-lg m-4">

                  <div className="px-6 py-4">
                        <p className="text-gray-700 text-base flex items-center justify-end my-2">
                              {title} <img className="max-w-[1.5rem] ml-2" src={currency1Img} alt="Sunset in the mountains" />
                        </p>

                        <p className="text-gray-600 text-base flex items-center mt-2 justify-end">
                              {currency2}: {currency2Price.toLocaleString()} <img className="max-w-[1.5rem] ml-2" src={currency2Img} alt="Sunset in the mountains" />
                        </p>

                        <p className="text-gray-600 text-base flex items-center mt-2 flex-row-reverse">
                        {' :تغییر '} <span dir="ltr" className={`mx-2 ${change?.toString()?.includes('-') ? 'text-red-600' : 'text-green-600'}`}>{change} </span>
                        </p>

                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div> */}
            </div>
      </>)
}