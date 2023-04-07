import { useState } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='font-mono'>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
