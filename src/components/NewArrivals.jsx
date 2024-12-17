import { useEffect, useState } from 'react';
import NewProduct from './NewProducts';

const NewArrivals = () => {
  const [newArrivalItems, setNewArrivalItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from backend API
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await fetch('https://tagslux-backend.vercel.app/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Set the fetched products and override their price to $60
        const updatedItems = data.map(item => ({
          ...item,
          price: 99000, // Set price to $60
        }));
        setNewArrivalItems(updatedItems);  // Set the modified products to state
      } catch (err) {
        setError(err.message);  // Set error message if fetch fails
      } finally {
        setLoading(false);  // Set loading to false once fetch is complete
      }
    };

    fetchNewArrivals();
  }, []); // Empty dependency array means this effect runs only once (component mount)

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetching fails
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 md:mb-12">
          New Arrivals
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newArrivalItems.slice(5, 8).map((item) => (  // Display items from index 5 to 7
            <NewProduct key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
