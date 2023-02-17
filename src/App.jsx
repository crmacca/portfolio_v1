import React from 'react'
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import ErrorPage from './pages/error';
import DarkLightSwitch from './components/lightdark_toggle';
import HomePage from './pages/Home/Home'
import ParticlesSwitch from './components/particles_toggle';
import AboutPage from './pages/About/About';



function App() {
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem('darkMode') === 'false' ? false : true)
  const [particlesEnabled, setParticles] = React.useState(localStorage.getItem('particleEffect') === 'false' ? false : true)

  function toggleParticles() {
      setParticles(t => !t)
      localStorage.setItem('particleEffect', !particlesEnabled)
  }

  if(localStorage.getItem('darkMode') === null) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('darkMode', true)
      setDarkMode(true)
    } else {
      localStorage.setItem('darkMode', false)
      setDarkMode(false)
    }
  }

  if(localStorage.getItem('particleEffect') === null) {
    localStorage.setItem('particleEffect', true)
    setParticles(true)
  }

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navigate to='home?showDialog=true' />
      ),
      errorElement: <ErrorPage darkMode={darkMode}/>
    },
    {
      path: "home",
      element: (
        <HomePage darkMode={darkMode} particlesEnabled={particlesEnabled} />
      ),
      errorElement: <ErrorPage darkMode={darkMode}/>
    },
    {
      path: "about",
      element: <AboutPage darkMode={darkMode} particlesEnabled={particlesEnabled}/>,
      errorElement: <ErrorPage darkMode={darkMode}/>
    },
  ]);

  return (
    <div style={{minHeight: '100vh', width: '100%'}} className={`App light-select dark:dark-select 2xl:overflow-hidden xl:overflow-hidden overflow-auto bg-white dark:bg-black bg dark:bg-dark transition-colors duration-300 ease-out ${darkMode ? 'dark' : 'light'}`}>
        <DarkLightSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ParticlesSwitch particles={particlesEnabled} toggleParticles={toggleParticles} />
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
