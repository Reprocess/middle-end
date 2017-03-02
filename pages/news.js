import React from 'react'
import Page from '../components/page'
import ListOfArticles from '../components/list-of-articles'
import getListOfArticles from '../lib/get-list-of-articles'

export default class extends React.Component {

  static async getInitialProps ({ query, req }) {
    const renderLocation = req ? 'server' : 'client'
    const { p } = query
    const page = Number(p || 1)
    const articles = await getListOfArticles('news', { page })
    return { page, articles, renderLocation }
  }

  render () {
    const { page, url, articles,renderLocation } = this.props
    const offset = (page - 1) * 12

    return <Page>
            <ListOfArticles page={page} offset={offset} articles={articles} />
           </Page>
  }

}
