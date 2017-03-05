import React from 'react'
import Page from '../components/page'
import ListOfArticlesView from '../components/list-of-articles-view'
import getArticles from '../lib/get-articles'

export default class extends React.Component {

  static async getInitialProps ({ query, req }) {
    const renderLocation = req ? 'server' : 'client'
    const articles = await getArticles('home')
    return { articles, renderLocation }
  }

  render () {
    const { articles, renderLocation } = this.props
    console.log('home -> articles', articles)
    return <Page>
             <ListOfArticlesView articles={articles} />
           </Page>
  }

}
