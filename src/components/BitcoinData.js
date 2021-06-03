import { useEffect, useState } from 'react';
const BitcoinData = () => {
  const API_KEY = process.env.REACT_APP_APIKEY;
  const URL = `/v1/currencies/ticker?key=${API_KEY}&ids=BTC,ETH,DOGE`;
  // const finalURL = `https://cors-anywhere.herokuapp.com/${URL}`;
  const [data, setdata] = useState(null);
  useEffect(() => {
    fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);

  return (
    <div className="bg-black text-gray-400">
      <div className="ml-4">Current price of currencies in real-time:</div>
      {data && (
        <div className="flex justify-around flex-wrap">
          <div>
            <img
              className="w-4 inline-block mr-1"
              src={`${data[0].logo_url}`}
              alt=""
            />
            Bitcoin:{' '}
            <span className="text-green-500">
              {data && parseInt(data[0].price, 10)}$
            </span>
          </div>
          <div>
            <img
              className="w-4 inline-block mr-1 mb-1"
              src={`${data[1].logo_url}`}
              alt=""
            />
            Ethereum:{' '}
            <span className="text-green-500">
              {data && parseInt(data[1].price, 10)}$
            </span>
          </div>
          <div>
            <img
              className="w-4 inline-block mr-1"
              src={`${data[2].logo_url}`}
              alt=""
            />
            Dogecoin:{' '}
            <span className="text-green-500">
              {data && parseFloat(data[2].price)}$
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitcoinData;
