import React from 'react';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery';
import DesktopNavBar from './DesktopNavBar';
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar';
import useMenu from '../../hook/useMenu';
import useMainContext from '../../hook/useMainContext';


export default function AppBar() {
  const {sm} = useGlobalMediaQuery()
  const { menus } = useMenu()
  const c = useMainContext();

  return (<>{
    sm ? (<PhoneNavBar handlePathName={c.actions.handlePathName} menus={menus}/>):(<DesktopNavBar menus={menus}/>)
  }</>);
}
