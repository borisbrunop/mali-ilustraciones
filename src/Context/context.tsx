import { createContext } from 'react'
import {Countries, GalleryPhotos, Components} from '../bussiness/interfaces'
import { PATHNAMES } from '../const/Pathnames'

interface ActionsTypes {
    toggleColorMode: () => void,
    handlePathName: (pathname: string) => PATHNAMES | undefined
}
interface StatesTypes {
    countries: Countries[],
    urls: GalleryPhotos[],
    loadingGalleryPhotos: boolean,
    loadingGalleryComponent: boolean,
    components: Components
}

interface ContextTypes {
    actions: ActionsTypes,
    states: StatesTypes
}

const Context = createContext({
    actions: {
        toggleColorMode: () => {},
        handlePathName: () => {}
    },
    states: {
        countries: [],
        urls: [],
        loadingGalleryPhotos: true,
        loadingGalleryComponent: true,
        components: {title: '', description: ''}
    }
    } as ContextTypes);

export default Context;