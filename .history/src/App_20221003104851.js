import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './';
import Sidebar from './component/Sidebar';
import Inventory from './pages/Inventory';
import Pending from './pages/Pending';
import OrderHistory from './pages/OrderHistory';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inventory/>} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/order" element={<OrderHistory />} />
         
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;