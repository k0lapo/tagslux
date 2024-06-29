// src/App.jsx
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
import products from './data/products';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Checkout from './components/Checkout';
import ShippingPolicy from './context/ShippingPolicy';
import PrivacyPolicy from './context/PrivacyPolicy';
import ReturnExchange from './context/ReturnExchange';
import FrequentlyAsked from './context/FrequentlyAsked';
import ContactUs from './context/ContactUs';
import LayoutTwo from './context/LayoutTwo';
import UserProfile from './components/UserProfile';
import { UserProfileProvider } from './context/UserProfileContext';

function App() {
  return (
    <CartProvider>
      <UserProfileProvider>
        <Router>
          <LayoutTwo>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="product"
                  element={
                    <div className="flex flex-wrap justify-center">
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  }
                />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="shipping-policy" element={<ShippingPolicy />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="return-exchange" element={<ReturnExchange />} />
                <Route path="faqs" element={<FrequentlyAsked />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="user-profile" element={<UserProfile />} />
              </Route>
            </Routes>
          </LayoutTwo>
        </Router>
      </UserProfileProvider>
    </CartProvider>
  );
}

export default App;
