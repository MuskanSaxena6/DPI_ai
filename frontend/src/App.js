import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import LoginPage from './pages/LoginPage';
   import './i18n';

   function App() {
     return (
       <Router>
         <Routes>
           <Route exact path="/" element={<HomePage />} />
           <Route path="/login" element={<LoginPage />} />
         </Routes>
       </Router>
     );
   }

   export default App;
