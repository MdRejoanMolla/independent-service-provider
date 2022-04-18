
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import NotFound from './components/NotFound/NotFound';
import About from './Pages/about/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/login/Login';
import Service from './Pages/Services/Service';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
