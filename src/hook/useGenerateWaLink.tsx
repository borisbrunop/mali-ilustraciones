import React from 'react'
import { CartItems, CartType } from '../bussiness/interfaces'


export default function useGenerateWaLink() {
    const handleGenerateLink = (cart: CartType, total: string) => {
        const items = cart.items.map((item: CartItems) =>{
        const descriptionReplaced = item.description.split(' ').join('%20')
        return `${descriptionReplaced}%20una%20cantidad%20de%20${item.quantity}%20el%20total%20da%20un%20precio%20de%20${item.amount * item.quantity}$`
        })
        // console.log('LINK TO PASS',items.join('%20'))
        
        const link = `https://wa.me/584123405104?text=${items.join(',%20')}%20el%20total%20de%20la%20compra%20serian%20${total}$`

        // console.log('LINK ESTE ES', link)
        window.open(link, '_blank');
    }

  return {handleGenerateLink}
}
