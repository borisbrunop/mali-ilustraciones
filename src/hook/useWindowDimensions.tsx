import {useState, useEffect} from 'react'

export const useWindowDimensions = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    
    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }
      
      window.addEventListener("resize", handleResize)
      
      handleResize()
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [setWidth])
    
    return {width, height}
  }