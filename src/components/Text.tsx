import { useTheme } from '@mui/material/styles';
import React from 'react'

interface TextType {
    content: string,
    styles: React.CSSProperties
}

export default function Text({content, styles}: TextType) {
    const theme = useTheme();

  return (
    <p style={{
        // fontSize: '20px', 
        // fontWeight: '600',
        marginBottom: '0px',
        marginTop: '0px',
        color: theme.palette.main.text1,
        // height: '50px',
        display: 'flex',
        alignItems: 'center', 
        ...styles
        }}>
        {content}
    </p>
  )
}
