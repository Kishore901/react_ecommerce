import { useEffect, useState } from 'react';
const Cards = ({ data }) => {
  const [wishedItem, setwishedItem] = useState([]);
  // adding cart items to local storage
  const handleCart = (shoe) => {
    let existing = localStorage.getItem('Cart');
    if (existing) {
      if (!existing.includes(shoe.id)) {
        existing = existing ? existing.split(',') : [];
        existing.push(shoe.id);
        localStorage.setItem('Cart', existing.toString());
      }
    } else {
      localStorage.setItem('Cart', [shoe.id]);
    }
  };

  // adding wish list to local storage
  const handleWish = (shoe) => {
    let existing = localStorage.getItem('Wish');
    if (existing) {
      if (!existing.includes(shoe.id)) {
        existing = existing ? existing.split(',') : [];
        existing.push(shoe.id);
        localStorage.setItem('Wish', existing.toString());
        setwishedItem(localStorage.getItem('Wish'));
      }
      // else {
      //   const exist = existing.filter((ele) => {
      //     return ele === shoe.id;
      //   });
      //   localStorage.setItem('Wish', exist.toString());
      //   setwishedItem(localStorage.getItem('Wish'));
      // }
    } else {
      localStorage.setItem('Wish', [shoe.id]);
      setwishedItem(localStorage.getItem('Wish'));
    }
  };
  //for colored heart on wished items
  useEffect(() => {
    if (localStorage.getItem('Wish') !== null) {
      const prev = localStorage.getItem('Wish');
      console.log(prev);
      setwishedItem(prev);
    }
  }, []);

  return (
    <>
      <div className="px-16 py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        {data.map((shoe) => (
          <div key={shoe.shoe.id} className="card hover:shadow-xl">
            <img
              src={`/images/${shoe.shoe.img}`}
              alt=""
              className="object-cover m-auto"
            />
            <div className="flex justify-around md:justify-between p-4">
              <div className="border rounded-md p-1 bg-primary text-white">
                <button
                  className="focus:outline-none"
                  onClick={() => {
                    handleCart(shoe.shoe);
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="inline-block ring-2 p-1 ring-gray-400 hover:bg-gray-400 cursor-pointer rounded-lg">
                <p className="m-auto">{`${shoe.shoe.price} $`}</p>
              </div>
            </div>
            <div
              onClick={() => handleWish(shoe.shoe)}
              className={`absolute top-0 p-3 text-gray-500 hover:text-primary cursor-pointer rounded-full shadow-xl bg-gray-100 ${
                wishedItem.includes(shoe.shoe.id) && 'text-primary'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
