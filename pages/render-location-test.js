import React from 'react'
import Page from '../components/page'
import RenderLocationTest from '../components/render-location-test'

export default class extends React.Component {

  static async getInitialProps ({ req }) {
    const renderLocation = req ? 'server' : 'client'
    return { renderLocation }
  }

  render () {

    const { renderLocation } = this.props
    console.log('renderLocation', renderLocation)

    return <Page>
      <RenderLocationTest
                          renderLocation={ renderLocation }
      />
    </Page>
  }

}
