import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_NOTION_DATABASE_PRODUCTS_ID}`).then((res: any) => {
        setProducts(res.data)
          setLoading(false)
      })
  }, [])
  return {products, loading}
}
