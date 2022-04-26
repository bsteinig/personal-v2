import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
  },
})


function MyApp({ Component, pageProps } : AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
