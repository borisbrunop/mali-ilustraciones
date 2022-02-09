import React from 'react';
import Typography from '@mui/material/Typography';
import useThemePalette from '../../hook/useThemePalette'
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"
import useGlobalMediaQuery from '../../hook/useGlobalMediaQuery';

export default function Component404() {
    const {text1} = useThemePalette()
    const {sm} = useGlobalMediaQuery()

    return(<>
        <Typography 
            style={{fontFamily: 'inherit', color: text1, display: 'flex', justifyContent: 'center', padding: '20px 10px 10px 10px'}} 
            variant={sm ? "h4" : "h2"}
        >error 404 page not found</Typography>
        </>
    )
}
