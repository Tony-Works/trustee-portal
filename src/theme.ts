import type { ThemeOptions } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles/shadows';

const theme = createTheme({
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
  palette: {
    primary: {
      main: '#2196f3',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    background: {
      default: '#F5F5F5 ',
    },
  },
  shadows: Array(25).fill('none') as Shadows,
});

export default createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
        },
      },
      defaultProps: {
        color: 'inherit',
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: '1px solid !important',
          borderColor: '#F4F4F4',
          borderRadius: '4px !important',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
          borderRadius: 10,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50rem',
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
          fontWeight: theme.typography.fontWeightBold,
          textTransform: 'none',
        },
        textPrimary: {
          backgroundColor: '#ffffff',
        },
        contained: {
          boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'warning',
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'warning',
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: theme.spacing(1.5),
        },
        shrink: {
          transform: 'translate(0, 1.5px) scale(1)',
        },
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
        margin: 'none',
        fullWidth: true,
      },
    },
    MuiBadge: {
      styleOverrides: {
        colorSecondary: {
          backgroundColor: '#676766',
        },
      },
    },
  },
} as ThemeOptions);
