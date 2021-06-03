import Cards from './Cards';
import Footer from './Footer';
import Navbar from './Navbar';
import { data } from '../data/price';
import BitcoinData from './BitcoinData';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="home-conatiner py-4 flex flex-col md:flex-row bg-gray-300">
          <div className="home-img-container order-1 md:order-2">
            <img
              src="/images/homeImg.png"
              className="w-screen max-h-80"
              alt=""
            />
          </div>
          <div className="p-5 text-base md:text-xl text-center order-2 md:order-1 m-auto">
            <p>
              Ever thought of shopping through bitcoins. Now it's possible,
              BuyTruCryp has made shopping like never before. The only platform
              where you can buy through bitcoins.
            </p>
            <div className="mt-5">
              <button className="bg-primary text-white py-2 px-4 rounded-full">
                Explore
              </button>
            </div>
          </div>
        </div>
        {/* Cards go here */}
        <Cards data={data} />
      </section>
      <BitcoinData />
      <Footer />
    </>
  );
};

export default Home;
