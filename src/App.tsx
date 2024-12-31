import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Map from './components/Map';
// import Blog from './components/Blog';
import BlogPost from './components/Blog';
import Header from './components/Header';

function App() {
  const location = useLocation();
  const showHeader = !location.pathname.includes('/products/') && !location.pathname.includes('/blog/');

  return (
    <Router>
      <div className="min-h-screen">
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero"><Hero /></div>
              <div id="about"><AboutUs /></div>
              <div id="products"><Products /></div>
              <div id="why-choose-us"><WhyChooseUs /></div>
              <div id="testimonials"><Testimonials /></div>
              {/* <div id="blog"><Blog /></div> */}
              <div id="faq"><FAQ /></div>
              <div id="contact"><Map /></div>
            </>
          } />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;