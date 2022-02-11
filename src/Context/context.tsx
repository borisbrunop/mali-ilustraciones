import { createContext } from 'react'
import {Countries, GalleryPhotos, Components, Menus} from '../bussiness/interfaces'
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
    components: Components,
    menus:   Menus[]
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
        components: {title: '', description: ''},
        menus: []
    }
    } as ContextTypes);

export default Context;