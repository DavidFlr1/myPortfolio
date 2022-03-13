import React from 'react'
import { GlobalStyle } from '../utils/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import MyContextProvider from '../context/context'
import theme from '../utils/theme'

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles/styles.scss'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MyContextProvider>
        <GlobalStyle/>
        <Header/>
        <main>{children}</main>
        <div id="consent_blackbar"></div>
        <Footer />

      </MyContextProvider>
    </ThemeProvider>
  )
}

export default Layout