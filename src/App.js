import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Menu from "./components/nav/menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
