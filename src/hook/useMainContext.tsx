import React, {useContext, useEffect, useState} from 'react';
import Context from '../Context/context'
import GalleryLogic from '../routes/Gallery/GalleryLogic';
import { createTheme } from '@mui/material/styles';
import getDesignTokens from '../uiModels/DesignTokens'
import FormLogic from '../routes/Products/useForm';
import useMenu from './useMenu';
import useProducts from './useProducts';
import useCategories from './useCategories';
import { CartType } from '../bussiness/interfaces';

export default () => useContext(Context)

export const ContextApp = () => {
    // const {loading, urls, handlePathName} = GalleryLogic()
    const {countries, loading: f} = FormLogic()
    const {loadingPhotos: p, loadingComponents: co, urls, handlePathName, components} = GalleryLogic()
    const { menus, loading: m} = useMenu()
    const { products, loading: ph } = useProducts()
    const {categories, loading: c} = useCategories()
    const [cart, setCart] = useState<CartType | undefined>()


    useEffect(() => {
      // storing input name
      const cartStorage = localStorage.getItem("cart");
      if(cartStorage !== 'undefined' && cartStorage && !cart?.items[0]) {
        setCart(JSON.parse(cartStorage))
        return
      }
      localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);


    const loading = f || p || m || ph || c || co

    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const [country, setCountry] = React.useState<string>('');
    let mainContext = {
        actions: {
            toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            handlePathName,
            setCountry,
            setCart
        },
        states: {
            countries,
            urls,
            loadingGalleryPhotos: p,
            loadingGalleryComponent: co,
            loading,
            components,
            menus,
            products,
            categories,
            country,
            cart
        }
      };
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return{mainContext, theme, mode}
}
