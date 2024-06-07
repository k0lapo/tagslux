
import Product from './Product';
import products from '../data/products';
import SingleVideo from './ImageSlider';


const Home = () => {
  // Slice the products array to select the first 6 items
  const displayedProducts = products.slice(0, 5);

  return (
    <div>
      <SingleVideo />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center">
          {displayedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
