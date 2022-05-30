import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Products } from '../../bussiness/interfaces'

interface ProductsByCategoryTypes {
    category: string
}

export default function ProductsByCategoryLogic({category}: ProductsByCategoryTypes) {
    const [products, setProducts] = useState<Products[]>([])
    const [error, setError] = useState<{message: string, code: number}>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if(category != 'not'){
            axios.get(`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_NOTION_DATABASE_PRODUCTS_ID}/${category}`).then((res: any) => {
                setProducts(res.data)
                setLoading(false)
            })
        }else{
            setError({message: 'parameter not provided', code: 401})
        }
    }, [])

  return {products, loading, error}
}
