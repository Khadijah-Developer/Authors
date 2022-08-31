import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import AddAuthor from "./components/AddAuthor";
import UpdateAuthor from "./components/UpdateAuthor";
import './App.css';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new" element={<AddAuthor/>} />
          {/* <Route exact path="/:id" element={} /> */}
          <Route exact path="/edit/:id" element={<UpdateAuthor/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
