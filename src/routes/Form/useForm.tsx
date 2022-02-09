import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Countries, Cities } from '../../bussiness/interfaces'
import { PATHNAMES } from '../../const/Pathnames'

export default function FormLogic() {
    const [countries, setCountries] = useState<Countries[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(`/${process.env.REACT_APP_NOTION_DATABASE_CITIES_ID}`).then((res: any) => {
            setCountries(res.data)
            setLoading(false)
        })
    }, [])

return {countries, loading};
}