import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Card from './components/ui/Card';

import HomePage from './components/home/HomePage';

const App = () => {
  return (
    <Card>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Card>
  );
};

export default App;
