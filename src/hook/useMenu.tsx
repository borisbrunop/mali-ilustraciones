import React, {useState, useEffect} from 'react';
import axios from 'axios';

interface MenusTypes {

}

export default function useMenu() {
    const [menus, setMenus] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_NOTION_DATABASE_MENUS_ID}`).then((res: any) => {
            setMenus(res.data)
            setLoading(false)
        })
    }, [])
  return {menus, loading};
}
