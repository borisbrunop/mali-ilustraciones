import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface SocialMediaTypes {
    fontSize: string
}

export default function SocialMedia({fontSize}: SocialMediaTypes,) {
    const theme = useTheme();
  return (
    <>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=584123405104">
            <WhatsAppIcon style={{color: theme.palette.main.text1, fontSize, paddingLeft: '5px'}}/>
        </a>
        <a target="_blank" href="https://www.instagram.com/malalaulart/?hl=es-la">
            <InstagramIcon style={{color: theme.palette.main.text1, fontSize, paddingLeft: '5px'}}/>
        </a>
        <a target="_blank" href="mailto:borisbruno88@gmail.com?Subject=Email%20desde%20mali-ilustraciones.com">
            <EmailOutlinedIcon style={{color: theme.palette.main.text1, fontSize, paddingLeft: '5px'}}/>
        </a>
    </>
  );
}
