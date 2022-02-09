import React from 'react';
import { useTheme } from '@mui/material/styles';

interface ThemePaletteTypes {
    primary: string,
    text1: string,
    text2: string,
    background: string
}

export default function useThemePalette() {
    const theme = useTheme();
  return {
    primary: theme.palette.main.primary,
    text1: theme.palette.main.text1,
    text2: theme.palette.main.text2,
    background: theme.palette.main.background
  } as ThemePaletteTypes
}
