import React from 'react'
import Page from '../components/page'
import Articles from '../components/articles'
import getArticles from '../lib/get-articles'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    const { p } = query
    const page = Number(p || 1)
    const articles = await getArticles('blog', { page })
    return { page, articles }
  }

  render () {
    console.log('articles.js renders', this.props)
    const { page, url, articles } = this.props
    const offset = (page - 1) * 12
    return <Page>
      <Articles page={page} offset={offset} articles={articles} />
    </Page>
  }

}
