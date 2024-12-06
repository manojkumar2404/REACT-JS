import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './Create';
import Read from './Read';
import Update from './Update';


function App() {
  return (
<div className="App">
  <BrowserRouter>
    <Routes>
        <Route exact path='/' element= {<Create />}></Route>
        <Route exact path='/read' element= {<Read />}></Route>
        <Route exact path='/update/:id' element= {<Update />}></Route>
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
