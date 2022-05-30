import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { useStyles } from './useStyles'
import useMenuMapper from './MenuMapper';
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery';
import {CartType, Menus} from '../../bussiness/interfaces';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@material-ui/styles';
import Notification from '../Notification';

const styles = makeStyles(() => ({
    icon: {
        color: '#937765',
        marginBottom: '5px'
    },
    selected: {
    },
    rootMenuItem: {
        "&$selected": {
            color: '#685549',
            marginBottom: '0px',
            fontSize: '34px'
        },
    },
    svg: {
        fontSize: '30px'
    }
}));

interface NavigationTypes {
    handlePathName: (pathname: string) => void,
    menus: Menus[],
    cart: CartType | undefined
  }

export default function SimpleBottomNavigation({handlePathName, menus, cart}: NavigationTypes) {
    const location = useLocation();
    const navBarValue = handlePathName(location.pathname)
    const theme = useTheme();
    const useClasses = useStyles(theme);


    const [value, setValue] = React.useState(handlePathName(location.pathname));
    const classes = styles();
    const classSelected = { selected: classes.selected, root: classes.rootMenuItem }
    // const history = useHistory();
    const navigate = useNavigate();
    const newMenus = useMenuMapper(classes, theme, menus)
    const {sm} = useGlobalMediaQuery()
    
    return (
        <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 100 }}>
            <BottomNavigation
                showLabels={false}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                style={{backgroundColor: theme.palette.main.background}}
            >
                {newMenus.map((menu: any) =>
                <>
                    <BottomNavigationAction
                    key={menu?.id}
                    className={useClasses.mySelector}
                    style={{color: theme.palette.main.text1, marginBottom: '5px'}}
                    icon={menu?.component} 
                    onClick={(event: any) => navigate(menu.path)}/>
                    {(menu.path === '/cart' && cart?.items?.length !== 0 && cart) &&
                        <Notification amount={cart?.items?.length || 0} styles={{bottom: '1px', right: '20px'}}/>
                    }
                </>
                )}
            </BottomNavigation>
        </Box>
    );
}