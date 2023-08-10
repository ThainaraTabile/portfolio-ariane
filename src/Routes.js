import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import About from './pages/About';
import App from './App';
import Projects from './pages/Projects';
import Header from './components/Header';
import Contact from './pages/Contact';

// function AppRoutes() {
//     return (
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//         <Route index element={<App/>} />
//           <Route path="/sobre" element={<About/>} />
//           <Route to="/projetos" element={
//           <>
//           <Projects/>
//           </>} />
//       </Routes>
//       </BrowserRouter>
//     );
//   }
  
//   export default AppRoutes;

function AppRoutes() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contato" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoutes;