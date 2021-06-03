import Navbar from './Navbar';
import { useEffect, useState } from 'react';
// import BitcoinData from './BitcoinData';
import Footer from './Footer';

const Cart = ({ data }) => {
  const [cart, setcart] = useState(null);
  let trig = 0;
  const [trigger, setTrigger] = useState(trig);
  const handleClear = () => {
    localStorage.removeItem('Cart');
    setTrigger(++trig);
  };
  useEffect(() => {
    if (localStorage.getItem('Cart') !== null) {
      setcart(
        data.filter((shoe) => {
          if (localStorage.getItem('Cart')) {
            const temp = localStorage.getItem('Cart');
            return temp.includes(shoe.shoe.id);
          } else {
            return null;
          }
        })
      );
    } else {
      setcart(null);
    }
    // setcart(
    //   data.filter((shoe) => {
    //     if (localStorage.getItem('Cart')) {
    //       const temp = localStorage.getItem('Cart');
    //       return temp.includes(shoe.shoe.id);
    //     } else {
    //       return null;
    //     }
    //   })
    // );
    console.log(cart);
  }, [trigger]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <div>
        <h1 className="font-semibold text-gray-600 p-3 text-xl">
          Your Cart Items
        </h1>
        <button
          onClick={() => handleClear()}
          className="cursor-pointer bg-gray-300 hover:bg-gray-500 hover:text-white mx-3 p-2 rounded-full focus:outline-none"
        >
          Clear Cart
        </button>
      </div>
      <div className="p-3 grid md:grid-cols-2 gap-10">
        {cart !== null ? (
          cart.map((shoe) => (
            <div
              key={shoe.shoe.id}
              className="flex justify-around p-2 py-4 card hover:shadow-xl"
            >
              <div>
                <div>
                  <img src={`/images/${shoe.shoe.img}`} alt="" />
                </div>
                <div className="text-center mt-2 text-xl">
                  <button className="quantBtn"> + </button>
                  <span className="mx-4">1</span>
                  <button className="quantBtn"> - </button>
                </div>
              </div>
              <div className="text-xl flex flex-col ">
                <h3>Price: {shoe.shoe.price}$</h3>
                <h3>Color: {shoe.shoe.color}</h3>
                <div className="ml-6 mt-28">
                  <button className="focus:outline-none p-1 px-4 rounded-lg ring-2 ring-primary hover:bg-primary hover:text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <div>No items in your cart. Please add the items in your cart.</div>
            <img className="m-auto" src="/images/emptyCart.gif" alt="" />
          </div>
        )}
      </div>
      <div className={`${cart && 'mt-20'}`}>
        {/* <BitcoinData /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
