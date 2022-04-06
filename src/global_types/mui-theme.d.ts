import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface Theme {
    custom: {
      drawer: {
        width: number;
      };
    };
  }

  interface ThemeOptions {
    custom?: {
      drawer?: {
        width?: number;
      };
    };
  }
}
