import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/Home'
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <>
     
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/About' element={<About />} />
          <Route path='/contact' element={<Contact />} />
         
          
          
        </Routes>
      
      
      </>

    </div>
  );
}

export default App;
