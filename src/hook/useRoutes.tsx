import React from 'react'
import Home from '../routes/Home/Home';
import About from '../routes/About/About';
import Collections from '../routes/Collections/Collection';
import Products from '../routes/Products/Products';
import Gallery from '../routes/Gallery/Gallery';
import useMainContext from './useMainContext';
import Component404 from '../routes/Component404/Component404';
import { UNSAFE_RouteContext } from 'react-router';
import {Menus} from '../bussiness/interfaces'
import { Loading } from '../components/Loading';

export default function useRoutes(menus: Menus[]) {
    // const c = useMainContext();
    const routesStatic = [
        {
            path: '/',
            component: <Gallery />,
        },
        {
            path: '/products',
            component: <Products />,
        },
        {
            path: '/collections',
            component: <Collections />,
        },
        {
            path: '/about',
            component: <About />,
        }
    ];

<<<<<<< HEAD
    const routes = [...routesStatic.filter((item) => menus.find((inner) => inner.path === item.path)),{path: '*',component: menus[0] ? <Component404 /> : <Loading /> ,}]
=======
    const routes = [...routesStatic.filter((item) => menus.find((inner) => inner.path === item.path))]
>>>>>>> d0a058868a7f34ffaceba4632d9cb58b39f0ee94

    return { routes }
}
