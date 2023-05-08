import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/style/index.css';
import Login from '../src/component/Login';
import Chatroom from '../src/component/Chatroom';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<p>dsfsfsf</p>} />
          <Route path='/login' element={<Login />} />
          <Route path='/chatRoom' element={<Chatroom />} />
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
