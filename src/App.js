import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound/NotFound";
import Carousel from "./components/carousel/Carousel";
import { CarouselData } from "./components/carousel/CarouselData";
import DoctorsProfile from "./pages/Doctor/DoctorsProfile";
import AddDoctor from "./components/Dashboard/AddDoctor";
import DoctorProfile from "./components/Dashboard/DoctorProfile";
import { useRecoilValue } from "recoil";
import { modalState } from "./atom/modalAtom";

function App() {
  const showModal = useRecoilValue(modalState);
  return (
    // <Homepage />
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="doctors" element={<DoctorsProfile />} />
          <Route path="*" element={<NotFound />} />

          {/* sidebar routes */}
          <Route path="add" element={<AddDoctor />} />
          <Route path="profiles" element={<DoctorProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
