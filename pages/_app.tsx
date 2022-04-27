import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import '@fontsource/iceland'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins'
import '@fontsource/inter'


// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
    logo: 'Iceland, sans-serif'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
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
