
import "./App.css";
import Home from "./components/pages/Home";
import List from "./components/pages/List";
import Add from "./components/pages/Add";
import Province from './components/Province';
import Sidebar from "./sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="row m-0 ps-0">
        <div className="col-md-3 ps-0">
          <Sidebar />
        </div>
      
        <div className="col-md-9 pe-0">
          <Routes>
        
            <Route path="/pages/Home" element={<Home />} />
            <Route path="/pages/List"element={<List/>}/>
            <Route path="/pages/Add"element={<Add/>}/>
            <Route path="/Province"element={<Province/>}/>

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
