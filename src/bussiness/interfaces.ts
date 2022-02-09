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
export interface Components {
    title: string, 
    description: string
}

