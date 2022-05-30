import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_NOTION_DATABASE_FRAMES_ID}`).then((res: any) => {
        setCategories(res.data)
        setLoading(false)
      })
  }, [])
  return {categories, loading}
}
