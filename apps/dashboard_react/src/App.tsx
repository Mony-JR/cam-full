import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
          {<Route path="/" element={<h1>Hello /</h1>} />}
          {<Route path="/home" element={<h1>Hello Home</h1>} />}
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
