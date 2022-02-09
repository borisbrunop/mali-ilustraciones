import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function About() {
    const theme = useTheme();
  return <Box style={{color: theme.palette.main.text1}}>ABOUT</Box>;
}
