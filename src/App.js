import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Pages:
import { Home, Contact} from "./pages/index";
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
           </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
