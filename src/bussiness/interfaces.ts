export interface Photo{
    url: string,
    order: number,
    width: number,
    height: number
}

export interface GalleryPhotos {
        src: string,
        width: number,
        height: number
}

export interface Frame {
    dimensions: string,
    name: string
}

export interface Variable {
    price: number,
    name: string
}
export interface Menus {
    name: string,
    order: number,
    path: string
}

export interface Cities {
    delivery: number,
    name: string,
    id: string
}

export interface Countries {
    name: string,
    cities: Cities[]
}
export interface Products {
    name: string,
    price: number,
    order: number,
    categories: string[],
    imgUrls: string[],
    description: string
}
export interface Categories {
    name: string,
    key: string,
    url: string,
    description_card: string,
    description_page: string,
    countries: string[]
}
export interface Components {
    title: string, 
    description: string
}

export interface CartItems {
    id: string,
    category: string,
    amount: number,
    description: string,
    products: Products[],
    quantity: number
}

export interface CartType {
    items: CartItems[],
    message: string
}

