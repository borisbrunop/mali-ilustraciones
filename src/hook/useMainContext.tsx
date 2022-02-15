import React, {useContext} from 'react';
import Context from '../Context/context'
import GalleryLogic from '../routes/Gallery/GalleryLogic';
import { createTheme } from '@mui/material/styles';
import getDesignTokens from '../uiModels/DesignTokens'
import FormLogic from '../routes/Form/useForm';
import useMenu from './useMenu';

export default () => useContext(Context)

export const ContextApp = () => {
    // const {loading, urls, handlePathName} = GalleryLogic()
    const {countries} = FormLogic()
    const {loadingPhotos, loadingComponents, urls, handlePathName, components} = GalleryLogic()
    const { menus } = useMenu()

    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    let mainContext = {
        actions: {
            toggleColorMode: () => {
              setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
            handlePathName
        },
        states: {
            countries,
            urls,
            loadingGalleryPhotos: loadingPhotos,
            loadingGalleryComponent: loadingComponents,
            components,
            menus
        }
      };
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return{mainContext, theme, mode}
}
