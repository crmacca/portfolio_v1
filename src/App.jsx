import React from 'react'
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error';
import DarkLightSwitch from './components/lightdark_toggle';
import HomePage from './pages/Home/Home'


function App() {
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem('darkMode') === 'true' ? true : false)

  if(localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', true)
  }

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage darkMode={darkMode} />
      ),
      errorElement: <ErrorPage darkMode={darkMode}/>
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    <div style={{minHeight: '100vh', width: '100%'}} className={`App light-select dark:dark-select 2xl:overflow-hidden xl:overflow-hidden overflow-auto bg-white dark:bg-black bg dark:bg-dark transition-colors duration-300 ease-out ${darkMode ? 'dark' : 'light'}`}>
        <DarkLightSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
