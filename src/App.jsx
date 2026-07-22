import {BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from "./Home.jsx";
import About from "./About.jsx";
import Vans from "./components/pages/Vans/Vans.jsx";
import VanDetail from "./components/pages/Vans/VanDetail.jsx";
import Layout from "./components/layout/Layout.jsx";
import Dashboard from "./components/pages/Host/Dashboard.jsx";
import Income from "./components/pages/Host/Income.jsx";
import Reviews from "./components/pages/Host/Reviews.jsx";
import HostLayout from "./components/layout/HostLayout.jsx";

export default function App(){
  return (

      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout/>}>
               <Route index element={<Home />}/>
               <Route path="about" element={<About />}/>
               <Route path="vans" element={<Vans />}/>
               <Route path="vans/:id" element={<VanDetail />}/>
                  <Route path="host" element={<HostLayout/>}>
                      <Route  index element={<Dashboard/>}/>
                      <Route path="income" element={<Income />} />
                      <Route path="review" element={<Reviews />} />
                  </Route>
              </Route>
          </Routes>
      </BrowserRouter>

  )
}


