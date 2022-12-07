import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages:
import { Home, Contact, Login, Register, Reset } from "./pages/index";
//Components:
import { Footer, Header } from "./components/index";


function App() {

  // const [first, setFirst] = useState("Zi");

  return (
    <>
     <BrowserRouter>
        <Header />
           <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
            <Route path="/reset" element={ <Reset />} />
           </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
