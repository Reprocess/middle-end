import React from 'react'
import Page from '../components/page'
import Articles from '../components/articles'
import getArticles from '../lib/get-articles'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    const { p } = query
    const page = Number(p || 1)
    const articles = await getArticles('blog', { page })
    // console.log('query getInitialProps', query)
    // console.log('page getInitialProps', page)
    // console.log('articles getInitialProps', articles)
    return { page, articles }
  }

  render () {

    const { page, url, articles } = this.props
    const offset = (page - 1) * 12
    // console.log('page', page);
    // console.log('url', url);
    // console.log('articles', articles);
    // console.log('offset', offset);
    return <Page>
      <Articles page={page} offset={offset} articles={articles} />
    </Page>
  }

}
