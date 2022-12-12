import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages:
import { Home, Contact, Login, Register, Reset } from "./pages/index";
//Components:
import { Footer, Header } from "./components/index";
//toast: 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  // const [first, setFirst] = useState("Zi");

  return (
    <>
     <BrowserRouter>
     <ToastContainer />
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
