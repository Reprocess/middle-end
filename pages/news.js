import React from 'react'
import Page from '../components/page'
import Stories from '../components/stories'
import getStories from '../lib/get-stories'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    const { p } = query
    const page = Number(p || 1)
    const stories = await getStories('topstories', { page })
    return { page, stories }
  }

  render () {
    console.log('stories.js renders', this.props)
    const { page, url, stories } = this.props
    const offset = (page - 1) * 30
    return <Page>
      <Stories page={page} offset={offset} stories={stories} />
    </Page>
  }

}