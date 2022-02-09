import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
    main: Palette['primary'];
  }
  interface PaletteOptions {
    main: PaletteOptions['primary'];
  }
  interface PaletteColor {
    primary?: string;
  }
  interface PaletteColorOptions {
    primary?: string;
  }
  interface SimplePaletteColorOptions {
    primary?: string;
  }
  interface PaletteColor {
    text1?: string;
  }
  interface PaletteColorOptions {
    text1?: string;
  }
  interface SimplePaletteColorOptions {
    text1?: string;
  }
  interface PaletteColor {
    text2?: string;
  }
  interface PaletteColorOptions {
    text2?: string;
  }
  interface SimplePaletteColorOptions {
    text2?: string;
  }
  interface PaletteColor {
    background?: string;
  }
  interface PaletteColorOptions {
    background?: string;
  }
  interface SimplePaletteColorOptions {
    background?: string;
  }
}

const getDesignTokens = (mode: any) => ({
    typography: {
      fontFamily: 'Cocomat, Brastika',
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          palette: {
            primary: '#BA5743',
            secondary: '#ED9037',
          },
            main: {
              primary: '#BA5743',
              text1: '#BA5743',
              text2: 'rgb(235, 145, 55)',
              background: '#FFDBA3'
            },
          }
        : {
          palette: {
            primary: '#FFDBA3',
            secondary: '#ED9037',
          },
            main: {
              primary: '#BA5743',
              text1: '#FFDBA3',
              text2: 'rgb(244, 186, 142)',
              background: '#BA5743'
            },
          }),
    },
  });



export default getDesignTokens;