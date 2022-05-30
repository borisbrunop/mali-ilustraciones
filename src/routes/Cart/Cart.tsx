import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { CartItems, Products } from "../../bussiness/interfaces"
import Card from "../../components/Card"
import useMainContext from "../../hook/useMainContext"
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ModalComponent from '../../components/ModalComponent';
import Text from '../../components/Text';
import TextField from '@mui/material/TextField';
import lodash from "lodash"
import useGenerateWaLink from '../../hook/useGenerateWaLink';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const Cart = () => {
    const c = useMainContext()
    const {handleGenerateLink} = useGenerateWaLink()
    const [openSentModal, setOpenSentModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [productSelected, setProductSelected] = useState<any>()
    const theme = useTheme();

    const handleOpenDeleteModal = (product: CartItems | undefined) => {
        setOpenDeleteModal(true); 
        setProductSelected(product)
    }
    const handleDeleteButton = () => {
        const newCartItems = c.states.cart?.items.filter((item: CartItems) => item.id !== productSelected.id)
        const newCart = {
            items: newCartItems,
            message: ''
        }
        if(newCartItems && newCart && c.states.cart?.items.length !== 1) {
            c.actions.setCart(newCart)
            setOpenDeleteModal(false)
            return
        }

        if(c.states.cart?.items.length === 1){
            localStorage.setItem("cart", 'undefined')
            c.actions.setCart(undefined)
            setOpenDeleteModal(false)
        }

    }

    const handleCalculateTotalCart = () => {
        let total = 0
        c.states.cart?.items.forEach((item: CartItems) =>{
            const totalAmount = item.amount * item.quantity
            total += totalAmount
        })
        return total
    }

    const handleOnChangeInputQuantity = (e: any, id: string) => {
        e.preventDefault()
        let newCartItems = c.states.cart?.items.find((item: CartItems) => item.id === id)
        const newCartWithoutChanges = c.states.cart?.items.filter((item: CartItems) => item.id !== id)
        if(newCartItems && e.target.value !== '0'){
            newCartItems.quantity = parseInt(e.target.value)
            const newCart = {
                items: newCartWithoutChanges ? lodash.orderBy([newCartItems, ...newCartWithoutChanges], ['amount'], ['asc']) : [],
                message: ''
            }
            c.actions.setCart(newCart)
        }
    }

    return (
        <>
        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '50px', marginLeft: '20px'}}>
            <Text content={`TOTAL: ${handleCalculateTotalCart()}$`} styles={{color: theme.palette.main.text1, marginRight: '50px', fontSize: '25px'}}/>
            <Button onClick={() => setOpenSentModal(!openSentModal)} sx={{color: theme.palette.main.text1, marginRight: '50px', fontSize: '25px'}}>
                Consultar pedido
            </Button>
        </Box>
        <Grid container style={{marginTop: '20px'}}>
            {c.states.cart?.items ?
                (
                    c.states.cart.items.map((item: CartItems) =>
                        <Card 
                        imgUrl={item.category === 'ILUST' ? [...item.products[0].imgUrls] : [...item.products[0].imgUrls, ...item.products[1].imgUrls]} 
                        title=''
                        price={item.amount}
                        description={item.description}
                        handleDeleteButton={handleOpenDeleteModal}
                        cartItem={item}
                        />
                        // <p>{item.description}</p>
                    )
                ) : (
                    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                        <Text content="No tienes Productos agregados a tu carrito" styles={{fontSize: '20px'}}/>
                    </Box>
                )}
        </Grid>
        <ModalComponent open={openSentModal} setOpen={setOpenSentModal} style={style}>
            <>
            <Text content={`TOTAL: ${handleCalculateTotalCart().toString()}$`} styles={{fontSize: '20px', fontWeight: '600', width: '100%', justifyContent: 'center', marginBottom: '20px'}}/>
            {c.states.cart?.items &&
                    c.states.cart.items.map((item: CartItems) =>
                    <>
                    <Box sx={{marginBottom: '10px'}} key={item.id}>
                        <Text content={item.description} styles={{}}/>
                        <TextField
                            id="outlined-number"
                            label="Cantidad"
                            type="number"
                            className="fontTitle"
                            fullWidth
                            onChange={(e: any) => handleOnChangeInputQuantity(e, item.id)}
                            value={c.states.cart?.items.find((itemInner: CartItems) => item.id === itemInner.id)?.quantity}
                            style={{marginTop: '10px'}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                    </>
                    )
                }
                <Box sx={{width: '100%', justifyContent: 'flex-end', display: 'flex'}}>
                    <Button     
                        onClick={(e) => {
                            e.preventDefault();
                            // window.open('http://google.com', '_blank');
                            if(c.states.cart){
                                handleGenerateLink(c.states.cart, handleCalculateTotalCart().toString())
                            }
                        }}                        
                        sx={{color: theme.palette.main.text1, fontSize: '20px'}}
                    >
                        Consultar
                    </Button>
                </Box>
            </>
        </ModalComponent>
        <ModalComponent open={openDeleteModal} setOpen={setOpenDeleteModal} style={style}>
        <>
            {c.states.cart?.items &&
                    <Box sx={{}}>
                        <Text content="Desea eliminar del carrito el siguiente producto?" styles={{fontSize: '20px', fontWeight: '600', marginBottom: '10px'}}/>
                        <Text content={productSelected?.description || ''} styles={{}}/>
                        <Box sx={{width: '100%', justifyContent: 'flex-end', display: 'flex'}}>
                            <Button onClick={() => handleDeleteButton()} sx={{color: theme.palette.main.text1, fontSize: '20px'}}>
                                Eliminar
                            </Button>
                        </Box>
                    </Box>
            }
        </>
        </ModalComponent>
        </>
    )
}


export default Cart