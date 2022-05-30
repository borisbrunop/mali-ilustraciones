import { createContext } from 'react'
import {Countries, GalleryPhotos, Components, Menus, Products, Categories, CartType} from '../bussiness/interfaces'
import { PATHNAMES } from '../const/Pathnames'

interface ActionsTypes {
    toggleColorMode: () => void,
    handlePathName: (pathname: string) => PATHNAMES | undefined,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    setCart: any
}
interface StatesTypes {
    countries: Countries[],
    urls: GalleryPhotos[],
    loadingGalleryPhotos: boolean,
    loadingGalleryComponent: boolean,
    components: Components,
    menus:   Menus[],
    products:   Products[],
    categories:   Categories[],
    country: string,
    cart: CartType | undefined
}

interface ContextTypes {
    actions: ActionsTypes,
    states: StatesTypes
}

const Context = createContext({
    actions: {
        toggleColorMode: () => {},
        handlePathName: () => {},
        setCountry: () => {},
        setCart: () => {}
    },
    states: {
        countries: [],
        urls: [],
        loadingGalleryPhotos: true,
        loadingGalleryComponent: true,
        components: {title: '', description: ''},
        menus: [],
        categories: [],
        products: [],
        country: '',
        cart: undefined
    }
    } as ContextTypes);

export default Context;