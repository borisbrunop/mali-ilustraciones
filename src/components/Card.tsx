import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Box, Grid } from '@material-ui/core';
import useGlobalMediaQuery from '../hook/useGlobalMediaQuery';
import { Slider } from './Slider';
import { CartItems, Products } from '../bussiness/interfaces';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

interface Actions {
    render: JSX.Element[] | JSX.Element,
}

interface cardProps {
    title: string,
    imgUrl: string[],
    actions?: Actions[],
    onClick?: (e: any, product: Products | undefined) => void,
    description?: string,
    price?: number,
    product?: Products,
    handleDeleteButton?: (product: CartItems | undefined) => void,
    cartItem?: CartItems
  }

export default function Card({title, imgUrl, actions, description, price, onClick = () => {}, product, handleDeleteButton, cartItem}: cardProps) {
    const theme = useTheme();
    const {lg} = useGlobalMediaQuery()
    const styles =  {
        borderBottom: `1px solid ${theme.palette.main.text1}`,
        borderRight: `1px solid ${theme.palette.main.text1}`,
        borderLeft: `1px solid ${theme.palette.main.text1}`,
        borderBottomLeftRadius: '5px',
        borderBottomRightRadius: '5px',
        padding: '10px'
    }

  return (
    <Grid
        key={`${title}${imgUrl}`}
        item 
        xs={12} 
        md={4} 
        lg={3}
        onClick={(e) => onClick(e, product)}
        style={{
            margin: '0px 0px 20px 0px', 
            padding: '0px 10px 0px 10px', 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%',
            flexDirection: 'column',
            cursor: actions || handleDeleteButton ? '' : 'pointer'
        }} >
        {(handleDeleteButton) &&
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton onClick={(e) => handleDeleteButton(cartItem)}>
                <ClearIcon style={{color: theme.palette.main.text1}}/>
            </IconButton>
        </Box>
        }
        {imgUrl.length > 1 ? 
        <Slider data={imgUrl}/>
        :
        <Slider dots={false}  arrows={false} data={imgUrl[0] ? imgUrl : ['https://res.cloudinary.com/mali-ilustraciones/image/upload/v1653253005/sample.jpg']}/>
        }
        <div style={styles}>
            {price ? (
                <div style={{justifyContent: 'space-between', display: 'flex', alignItems: 'center', width: '100%'}}>
                    <p style={{
                        fontSize: '20px', 
                        fontWeight: '600',
                        marginBottom: '0px',
                        marginTop: '0px',
                        color: theme.palette.main.text1,
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center'
                        }}>
                        {title}
                    </p>
                    <p style={{
                        fontSize: '25px',
                        fontWeight: '600',
                        marginBottom: '0px',
                        marginTop: '0px',
                        color: theme.palette.main.text1,
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center'
                        }}>
                        {`${price}$`}
                    </p>
                </div>
            ):(
            <p style={{
                fontSize: '20px', 
                color: theme.palette.main.text1,
                height: '50px',
                display: 'flex',
                alignItems: 'center'
                }}>
                {title}
            </p>
            )}
            {/* {description &&  */}
            <div style={{height: '50px'}}>
                <p style={{
                    fontSize: '16px',
                    height: '100%',
                    color: theme.palette.main.text1,
                    display: 'flex',
                    alignItems: 'center'
                    }}>
                    {description}
                </p>
            </div>
            {/* } */}
        {actions && 
            actions.map((action: Actions) =>(action.render))
        }
        </div>
    </Grid>
  )
}
