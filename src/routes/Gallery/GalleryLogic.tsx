import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Photo, GalleryPhotos, Components } from '../../bussiness/interfaces'
import { PATHNAMES } from '../../const/Pathnames'

export default function Galleryogic() {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [components, setComponents] = useState<Components>({title: '', description: ''})
    const [loadingPhotos, setLoadingPhotos] = useState<boolean>(true)
    const [loadingComponents, setLoadingComponents] = useState<boolean>(true)
    const urls: GalleryPhotos[] = photos?.map((item: Photo) => ({ src: item.url, width: item.width, height: item.height }))

    const handlePathName = (pathname: string) => {
        switch (pathname) {
            case '/about': return PATHNAMES.ABOUT
            case '/collections': return PATHNAMES.COLLECTIONS
            case '/': return PATHNAMES.HOME
            case '/gallery': return PATHNAMES.GALLERY
            case '/form': return PATHNAMES.FORM
        }
    }

    useEffect(() => {
        axios.get(`/${process.env.REACT_APP_NOTION_DATABASE_PHOTOS_ID}`).then((res: any) => {
            setPhotos(res.data)
            setLoadingPhotos(false)
        })
        axios.get(`/${process.env.REACT_APP_NOTION_DATABASE_PHOTOS_ID}/componente`).then((res: any) => {
            setComponents({title: res.data.title, description: res.data.description})
            setLoadingComponents(false)
        })
    }, [])

return {loadingPhotos, loadingComponents ,urls, handlePathName, components};
}
