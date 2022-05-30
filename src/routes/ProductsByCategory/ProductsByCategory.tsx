import { Grid } from '@material-ui/core'
import React, { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Categories, Products } from '../../bussiness/interfaces'
import Card from '../../components/Card'
import { Loading } from '../../components/Loading'
import ProductsByCategoryLogic from './ProductsByCategoryLogic'
import { useTheme } from '@mui/material/styles';
import StepperProducts from './components/StepperProducts'
import useMainContext from '../../hook/useMainContext'

export default function ProductsByCategory() {
    const {category} = useParams()
    const theme = useTheme();
    const c = useMainContext()
    const categories = useMemo(() => c.states.categories.find((item: Categories) => item.key === category) , [c, category])
    const {products, loading, error} = ProductsByCategoryLogic({category: category || 'not'})
  return (
    <>{category ? 
        !loading ?
        <StepperProducts cart={c.states.cart} setCart={c.actions.setCart} products={products} category={categories}/>
    :
    <Loading />
    :
    <Navigate to="/products" replace={true} />
    } 
    </>
  )
}
