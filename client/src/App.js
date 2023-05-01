import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Prodcuts</h1>} />
          <Route path="/add" element={<h1>Add Prodcuts</h1>} />
          <Route path="/update" element={<h1>Update Prodcuts</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
