import Fotter from '../components/Layout/Fotter';
import Header from '../components/Layout/Header';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Fotter />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
