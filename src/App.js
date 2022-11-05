import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import { Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import Services from "./pages/Services";
import About from "./pages/About";


function App() {
  useEffect(()=>{
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))
          }
          <Route element={<PrivateRoute />}>
            <Route path="/services" element={<Services />}/>
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
