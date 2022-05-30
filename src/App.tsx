import React, {useEffect} from 'react';
import { Routes, Route} from "react-router-dom";
import AppBar from './components/AppBar/AppBar';
import useGlobalMediaQuery from './hook/useGlobalMediaQuery'
import ColorModeContext from './Context/context'
import { ThemeProvider } from '@mui/material/styles';
import NightModeSwitch from './components/NightModeSwitch';
import {useWindowDimensions} from './hook/useWindowDimensions'
import useMainContext, {ContextApp} from './hook/useMainContext'
import useRoutes from './hook/useRoutes';
import ProductsByCategory from './routes/ProductsByCategory/ProductsByCategory';

export default function App() {
  const {sm} = useGlobalMediaQuery()
  const {mainContext, theme} = ContextApp()
  const {width} = useWindowDimensions()
  const {routes} = useRoutes(mainContext.states.menus)
  const c = useMainContext()

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
      const routeComponents = routes.map(({path, component}) => <Route path={path} element={component} key={path} />);

  return (
    <ColorModeContext.Provider value={mainContext}>
    <ThemeProvider theme={theme}>
        {sm ? (<NightModeSwitch />):''}
        <div style={style}>
          <div style={{width: width > 1400 ? '1400px' : '100%'}}>
            <AppBar/>
            <Routes>
              {routeComponents}
              <Route
                  path="/products/:category"
                  element={<ProductsByCategory />}
              />
            </Routes>
          </div>
        </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
