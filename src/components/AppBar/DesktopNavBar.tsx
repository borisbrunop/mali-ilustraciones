import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import NightModeSwitch from '../NightModeSwitch';
import { useTheme } from '@mui/material/styles';
import {useWindowDimensions} from '../../hook/useWindowDimensions'
import useThemePalette from '../../hook/useThemePalette'
import usePalette from '../../hook/useMainContext'
import { Menus } from '../../bussiness/interfaces';


interface Pages {
    name: string;
    path: string;
}

const pages: Pages[] = [
    {name: 'Nosotros', path: '/about'}, 
    {name: 'Collecciones', path: '/collections'}, 
    {name: 'Galeria', path: '/gallery'},
    {name: 'Precios', path: '/form'} 
];

interface DesktopNavBarTypes {
    menus: Menus[]
}

const DesktopNavBar = ({menus}: DesktopNavBarTypes) => {
    const navigate = useNavigate()
    const theme = useTheme();
    const colors = useThemePalette()
    const {width} = useWindowDimensions()
    const colorMode = usePalette()


    return (
        <Box 
        style={{
            width: '100%',
            position: 'fixed',
            top: 0,
            // backgroundColor: theme.palette.main.background,
            height: '65px'
        }}>
            <AppBar position="sticky" 
            style={{
                width: width > 1400 ? '1400px' : '100%',
                // position: 'fixed',
                // top: 0,
                backgroundColor: theme.palette.main.background,
                height: '100%',
                boxShadow: '0px 0px 0px 0px',
                backgroundImage: 'none'
            }}>  
                <Container maxWidth="xl" style={{paddingRight: '12px', paddingLeft: '12px'}}>
                    <Toolbar disableGutters>
                        <Box sx={{display: 'flex'}}>
                            {/* <Link to="/"> */}
                                <img 
                                    src={theme.palette.mode === 'light' ? 
                                    "https://res.cloudinary.com/mali-ilustraciones/image/upload/icons/phone-icon-light.png" 
                                    :
                                    "https://res.cloudinary.com/mali-ilustraciones/image/upload/icons/phone-icon-dark.png"
                                    }
                                    height="55" 
                                    width="120"
                                />
                            {/* </Link> */}
                        </Box>
                        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
                            {menus.map((page: Menus) => (
                                <Button
                                    key={page.name}
                                    onClick={(event: any) => navigate(page.path)}
                                    sx={{ my: 2, color: theme.palette.main.text1, display: 'block', marginRight: '15px', fontWeight: 'bold'}}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    <NightModeSwitch />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
export default DesktopNavBar;
