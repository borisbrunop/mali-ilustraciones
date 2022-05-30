import {useMemo} from 'react';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {Menus} from '../../bussiness/interfaces';

export default function useMenuMapper(classes: any, theme: any, menus: Menus[]) {
    const menuMapper = [
        {
            path: '/about',
            component: <InfoOutlinedIcon className={classes.svg} />
        },
        {
            path: '/collections',
            component: <CollectionsOutlinedIcon className={classes.svg} />
        },
        {
            path: '/',
            component: 
                <img 
                    src={theme.palette.mode === 'light' ? 
                        "https://res.cloudinary.com/mali-ilustraciones/image/upload/logo-light.png" 
                        :
                        "https://res.cloudinary.com/mali-ilustraciones/image/upload/logo-dark.png"
                    }
                    height="25" 
                    width="50"
                />
        },
        {
            path: '/gallery',
            component: <DashboardOutlinedIcon className={classes.svg} />
        },
        {
            path: '/products',
            component: <DashboardIcon className={classes.svg} />
        },
        {
            path: '/cart',
            component: <ShoppingCartIcon className={classes.svg} />
        },
    ]


    const newMenus = useMemo(() => 
    menus.map((item: Menus) => menuMapper.find((inner: any) => inner.path === item.path))
    , [menus, menuMapper])

  return newMenus || [];
}
