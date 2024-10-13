/*import React from 'react';
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
*/

/*
   import React from 'react';
   import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import LoginPage from './pages/LoginPage';
   import Navigation from './components/Navigation';
   import './i18n';
   
   // Layout component to conditionally render Navigation
   const Layout = ({ children }) => {
     const location = useLocation();
     const isLoginPage = location.pathname === '/login';
   
     return (
       <>
         {!isLoginPage && <Navigation />}
         {children}
       </>
     );
   };
   
   function App() {
     return (
       <Router>
         <Layout>
           <Routes>
             <Route exact path="/" element={<HomePage />} />
             <Route path="/login" element={<LoginPage />} />
           </Routes>
         </Layout>
       </Router>
     );
   }
   
   export default App;
   */


   import React from 'react';
   import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import LoginPage from './pages/LoginPage';
   import Navigation from './components/Navigation';
   import './i18n';
   import { ThemeProvider } from '@material-ui/core/styles';
   import { createTheme } from '@material-ui/core/styles';
   
   // Create theme (customize as needed)
   const theme = createTheme();
   
   // Layout component to conditionally render Navigation
   const Layout = ({ children }) => {
     const location = useLocation();
     const isLoginPage = location.pathname === '/login';
   
     return (
       <>
         {!isLoginPage && <Navigation />}
         {children}
       </>
     );
   };
   
   function App() {
     return (
       <ThemeProvider theme={theme}>
         <Router>
           <Layout>
             <Routes>
               <Route exact path="/" element={<HomePage />} />
               <Route path="/login" element={<LoginPage />} />
             </Routes>
           </Layout>
         </Router>
       </ThemeProvider>
     );
   }
   
   export default App;