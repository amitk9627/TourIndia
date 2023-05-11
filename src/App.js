import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/Home'
import Blogs from './routes/Blogs';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <>
     
        
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/About' element={<About />} />
          <Route path='/contact' element={<Contact />} />
         
          
          
        </Routes>
      
      
      </>

    </div>
  );
}

export default App;
