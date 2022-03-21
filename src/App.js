import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Userlist from './pages/Userlist';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/coup_de_coeur" element={<Userlist/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
};

export default App;