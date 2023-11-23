import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";

import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound/NotFound";
import Carousel from "./components/carousel/Carousel";
// import { CarouselData } from "./components/carousel/CarouselData";
import Doctor from "./pages/Doctors/Doctors";
import DoctorsProfile from "./pages/Doctor/DoctorsProfile";
import AddDoctor from "./components/Dashboard/AddDoctor";
import DoctorProfile from "./components/Dashboard/DoctorProfile";
import { useRecoilValue } from "recoil";
import { modalState } from "./atom/modalAtom";
import Blogauth from "./pages/Blog/Blogauth";
import Blogsec from "./pages/Blog/Blogsec";
import Blog from "./pages/Blog/Blog";
import Blogparent from "./pages/Blog/Blogparent";
import BlogList from "./pages/Blog/BlogList";
import BlogPost from "./pages/Blog/BlogPost";
import Bookappointment from "./components/sec/Bookappointment";
import Map from "./pages/Map/Map";

function App() {
  return (
    // <Homepage />
    <>
      <Helmet>
        <title>Opeyemi Mega Eye Center</title>
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="appointment" element={<Appointment />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="doctors" element={<DoctorsProfile />} />
          <Route path="appointment" element={<Doctor />} />
          <Route path="submit" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          {/* sidebar routes */}
          <Route path="add" element={<AddDoctor />} />
          <Route path="profiles" element={<DoctorProfile />} />

          <Route path="blogauth" element={<Blogauth />} />
          <Route path="blogsec" element={<Blogsec />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogparent" element={<Blogparent />} />

          <Route path="bloglist" element={<BlogList />} />
          <Route path="/blogpost/:id" element={<BlogPost />} />

          <Route path="bookappoint" element={<Bookappointment />} />

          <Route path="map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
