import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";




function App() {

  // const [first, setFirst] = useState("Zi");

  return (
    <>
     <BrowserRouter>
        <Header />
           <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/contact" element={ <Contact />} />
           </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
