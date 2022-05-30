import React from 'react';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery';
import DesktopNavBar from './DesktopNavBar';
import PhoneNavBar from '../PhoneNavBar/PhoneNavBar';
import useMenu from '../../hook/useMenu';
import useMainContext from '../../hook/useMainContext';


export default function AppBar() {
  const {sm} = useGlobalMediaQuery()
  const c = useMainContext();

  return (<>{
    sm ? (<PhoneNavBar cart={c.states.cart} handlePathName={c.actions.handlePathName} menus={c.states.menus}/>):(<DesktopNavBar cart={c.states.cart} menus={c.states.menus}/>)
  }</>);
}
