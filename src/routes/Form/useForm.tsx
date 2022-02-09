import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Countries } from '../../bussiness/interfaces'

export default function FormLogic() {
    const [countries, setCountries] = useState<Countries[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_NOTION_DATABASE_CITIES_ID}`).then((res: any) => {
            setCountries(res.data)
            setLoading(false)
        })
    }, [])

return {countries, loading};
}