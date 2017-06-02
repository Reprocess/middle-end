import React, { Component } from 'react'
import Page from '../components/page'
import RenderLocationTest from '../components/render-location-test'

export default class extends Component {

  static async getInitialProps ({ req }) {
    const renderLocation = req ? 'server' : 'client'
    return { renderLocation }
  }

  render () {

    const { renderLocation } = this.props

    return <Page>
      <RenderLocationTest
                          renderLocation={ renderLocation }
      />
    </Page>
  }

}
