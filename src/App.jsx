import {BrowserRouter , Route , Routes , Link} from 'react-router-dom'
import Home from "./Home.jsx";
import About from "./About.jsx";
import Vans from "./components/pages/Vans/Vans.jsx";
import VanDetail from "./components/pages/Vans/VanDetail.jsx";

export default function App(){
  return (

      <BrowserRouter>
          <header>
                 <Link to="/" className="site-logo">#VanLife</Link>
              <nav>
                  <Link to="/about">About</Link>
                  <Link to="/vans">Vans</Link>
              </nav>
          </header>
          <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/vans" element={<Vans />}/>
               <Route path="/vans/:id" element={<VanDetail />}/>
          </Routes>
      </BrowserRouter>

  )
}


