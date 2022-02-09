import React, {useEffect} from 'react';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Form from './routes/Form/Form';
import Collection from './routes/Collections/Collection'
import { Routes, Route, Navigate} from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import Gallery from './routes/Gallery/Gallery';
import useGlobalMediaQuery from './hook/useGlobalMediaQuery'
import ColorModeContext from './Context/context'
import { ThemeProvider } from '@mui/material/styles';
import NightModeSwitch from './components/NightModeSwitch';
import {useWindowDimensions} from './hook/useWindowDimensions'
import Component404 from './routes/Component404/Component404';
import {ContextApp} from './hook/useMainContext'

export default function App() {
  const {sm} = useGlobalMediaQuery()
  const {mainContext, theme} = ContextApp()
  const {width} = useWindowDimensions()

      const style = {
        paddingTop: sm ? '20px' : '70px', 
        height: 'fit-content', 
        backgroundColor: theme.palette.main.background,
        display: 'flex',
        justifyContent: 'center'}

      useEffect(() => {
        handleBody()
      }, [theme.palette.mode])

      const handleBody = () => {
        const content = `body { background-color: ${theme.palette.main.background}}`;
        const style = document.createElement("style");
        style.innerHTML = content;
        document.head.appendChild(style);

      }


  return (
    <ColorModeContext.Provider value={mainContext}>
    <ThemeProvider theme={theme}>
        {sm ? (<NightModeSwitch />):''}
        <div style={style}>
          <div style={{width: width > 1400 ? '1400px' : '100%'}}>
            <AppBar/>
            <Routes>
              <Route
                  path="*"
                  element={<Navigate to="/404" />}
              />

              {/* <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} 
              <Route path="/collections" element={<Collection />} />  */}
              <Route path="/404" element={<Component404 />}/>
              <Route path="/form" element={<Form />} />
              <Route path="/" element={<Gallery />} />
            </Routes>
          </div>
        </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
