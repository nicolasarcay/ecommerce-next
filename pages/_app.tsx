import '../styles/globals.css';
import { lightTheme } from '../themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <AnyComponent {...pageProps} />
    </ThemeProvider>
  );
}
