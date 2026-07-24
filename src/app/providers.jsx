'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
      light: '#80e8ff',
      dark: '#0099cc',
    },
    secondary: {
      main: '#ff6b9d',
      light: '#ffb3d1',
      dark: '#cc3366',
    },
    background: {
      default: '#0a0e27',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h6: { fontWeight: 700, letterSpacing: '-0.02em' },
    subtitle1: { fontWeight: 500 },
    body2: { lineHeight: 1.6 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
})

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}