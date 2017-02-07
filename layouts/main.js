import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Meta from '../components/meta'
import Navbar from './navbar/index'

export default ({ children }) => (
  <MuiThemeProvider>
    <div className="main">
      <Navbar />
      { children }
      <Meta />
    </div>
  </MuiThemeProvider>
)
