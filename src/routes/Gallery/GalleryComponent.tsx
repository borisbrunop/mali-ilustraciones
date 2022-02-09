import React, {useState, useCallback} from 'react';
// import Gallery from 'react-photo-gallery'
import { GalleryPhotos } from '../../bussiness/interfaces'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

interface GalleryTypes {
    urls: GalleryPhotos[]
}

export default function GalleryGrid({urls}: GalleryTypes) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <div>
        <Gallery photos={urls} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={urls.map((item) => ({source: item.src}))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
//   return <Gallery photos={urls}/>;
}
