import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import DataPage from './components/Datapage';

function App() {
    return (
      <Router>
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/data" element={<DataPage />} />
      </Routes>
  </Router>
    );
}

export default App;
