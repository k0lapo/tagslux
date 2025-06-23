import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import ProductCards from './components/ProductCards';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Cart from './components/Cart';
import Login from './components/Login';
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
import NewArrivals from './components/NewArrivals';
import NewProductDetail from './components/NewProductDetail';
import ProductList from './components/ProductList'; // ✅ Use the proper component now

function App() {
  return (
    <CartProvider>
      <UserProfileProvider>
        <Router>
          <LayoutTwo>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<ProductList />} />{' '}
                {/* ✅ Now shows full product list */}
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="new-arrivals" element={<NewArrivals />} />
                <Route path="new-arrivals/:id" element={<NewProductDetail />} />
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
