import { useEffect, useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Pagination from "./pagination/Pagination";

type Currency = {
      id: number;
      title: string;
      title_fa: string;
      code: string;
      image: string;
};


export type Data = {
      id: number;
      currency1: Currency;
      currency2: Currency;
      tradable: boolean;
      for_test: boolean;
      otc_sell_percent: string;
      otc_buy_percent: string;
      otc_max_buy_amount: string;
      otc_max_sell_amount: string;
      order_book_info: any;
      internal_price_info: any;
      price_info: any;
      price: string;
      title: string;
      code: string;
      title_fa: string;
      trading_view_source: string;
      trading_view_symbol: string;
      otc_market: boolean;
      text: string;
      volume_24h: string;
      market_cap: string;
      circulating_supply: string;
      all_time_high: string;
};

export default function Page() {
      const [marketData, setMarketData] = useState<Data[]>([]);
      const [price, setPrice] = useState<any>([]);

      useEffect(() => {
            const socket = new WebSocket('wss://ws.bitpin.ir');

            // Handle the socket connection event
            socket.onopen = () => {
                  // Send the subscription request
                  socket.send(JSON.stringify({ method: 'sub_to_price_info' }));
            };

            // Handle incoming socket messages
            socket.onmessage = (event) => {
                  const data = JSON.parse(event.data);
                  setPrice(data);
            };
            return () => {
                  socket.close();
            };
      }, []);

   
      return (
            <div className='flex flex-col w-full h-full'>
                  <Header />
                  <Main data={marketData} price={price} />
                  <Pagination setData={setMarketData} />
            </div>
      );
}