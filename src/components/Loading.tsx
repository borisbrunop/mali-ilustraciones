import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';

export const Loading = () => {
    const styles = { display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', height: '450px' }
    const theme = useTheme();
  return (
    <Box sx={styles}>
        <CircularProgress style={{color: theme.palette.main.text1}} />
    </Box>
  )
}
