import { Box, Grid } from '@material-ui/core'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartType, Categories, Products } from '../../../bussiness/interfaces'
import { v4 as uuidv4 } from 'uuid';
import Card from '../../../components/Card'
import Text from '../../../components/Text'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import lodash from "lodash"

interface StepperProductsType {
    products: Products[],
    category?: Categories, 
    setCart: React.Dispatch<React.SetStateAction<CartType | undefined>>,
    cart: CartType | undefined
}

export default function StepperProducts({products, category, setCart, cart}: StepperProductsType) {
    const theme = useTheme();
    const [stepper, setStepper] = useState(0)
    const [ilustSelected, setIlustSelected] = useState<Products>()
    // const [productSelected, setProductSelected] = useState<Products>()
    // const [productToCart, setProductToCart] = useState()
    const productsIlust = products.filter((prod: Products) => !!prod.categories.find((item: string) => item === 'ILUST'));
    const productsCategory = products.filter((prod: Products) => !!prod.categories.find((item: string) => item === category?.key) && !prod.categories.find((item: string) => item === 'ILUST'));
    const navigate = useNavigate();


    const handleCardOnClick = (e: any, product: Products | undefined) => {
        e.preventDefault()
        if(!stepper && category?.key !== 'ILUST'){
            setIlustSelected(product)
            setStepper(1)
            return
        }

        if(category?.key === 'ILUST'){
            const addToCartIlust = {
                items: cart?.items[0] ? lodash.orderBy([...cart?.items, {
                    id: uuidv4(),
                    amount: product ? product?.price : 0,
                    category: category ? category?.key : '',
                    description: product ? `Una ${category?.name} de ${product.name}` : '',
                    quantity: 1,
                    products:  product ? [product] : []
                }], ['amount'], ['asc']) : [{
                    id: uuidv4(),
                    amount: product ? product?.price : 0,
                    category: category ? category?.key : '',
                    description: product ? `Una ${category?.name} de ${product.name}` : '', 
                    quantity: 1,
                    products:  product ? [product] : []
                }],
                message: ''
            }
            setCart(addToCartIlust)
            // setStepper(0)
            navigate(`/cart`)
            return
        }

        const addToCart = {
            items: cart?.items[0] ? lodash.orderBy([...cart?.items, {
                id: uuidv4(),
                amount: (ilustSelected && product) ? ilustSelected?.price + product?.price : 0,
                category: category ? category?.key : '',
                description: (ilustSelected && product) ? 
                    `Una ilustracion de ${ilustSelected.name} hecho en ${product.categories[0]} con una medidas de ${product.name}` : '', 
                quantity: 1,
                products: (ilustSelected && product) ? [ilustSelected, product] : []
            }], ['amount'], ['asc']) : [{
                id: uuidv4(),
                amount: (ilustSelected && product) ? ilustSelected?.price + product?.price : 0,
                category: category ? category?.key : '',
                description: (ilustSelected && product) ? 
                    `Una ilustracion de ${ilustSelected.name} hecho en ${product.categories[0]} con una medidas de ${product.name}` : '', 
                quantity: 1,
                products: (ilustSelected && product) ? [ilustSelected, product] : []
            }],
            message: ''
        }

        if(stepper){
            // setProductSelected(product)
            setCart(addToCart)
            setStepper(0)
            navigate(`/cart`)
            return
        }
    }




  return (
    <Grid container style={{marginTop: '50px'}}>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '40px', marginBottom: '40px'}}>
            <Box sx={{maxWidth: '800px', width: '100%'}}>
                <Text content={category?.description_page || ''} styles={{fontSize: '20px', textAlign: 'center'}} />
            </Box>
        </Box>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
            {stepper ?
                <IconButton onClick={() => setStepper(0)}>
                    <ArrowBackIcon style={{color: theme.palette.main.text1}}/>
                </IconButton> : ''
            }
            <Text content={!stepper ? 'ILUSTRACION' : category?.name || ''} styles={{fontSize: '20px',fontWeight: '600', justifyContent: 'center', width: '100%'}}/>
        </Box>
        {products[0] && (
            !stepper ?
            productsIlust.map((product: Products) => 
                <Card product={product} price={product.price} description={product.description} onClick={handleCardOnClick} title={product.name} imgUrl={product.imgUrls}/> 
            )
            :
            productsCategory.map((product: Products) => 
            <Card product={product} price={product.price} description={product.description} onClick={handleCardOnClick} title={product.name} imgUrl={product.imgUrls}/> 
            )
        )
        }
    </Grid>
  )
}
