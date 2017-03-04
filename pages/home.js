import React from 'react'
import Page from '../components/page'
import ListOfArticlesView from '../components/list-of-articles-view'
import getListOfArticles from '../lib/get-list-of-articles'

export default class extends React.Component {

  static async getInitialProps ({ query, req }) {
    const renderLocation = req ? 'server' : 'client'
    console.log('home.js -> getInitialProps() -> query', query)
    const articles = await getListOfArticles('home')
    console.log('home.js -> getInitialProps() -> articles', typeof articles[0])
    return { articles, renderLocation }
  }

  render () {
    console.log('This page was rendered on the ', this.props.renderLocation)
    console.log('home.js -> begin render of ListOfArticles -> this.props ', this.props.articles[0])
    const { articles, renderLocation } = this.props

    return <Page>
            <ListOfArticlesView articles={articles} />
           </Page>
  }

}
