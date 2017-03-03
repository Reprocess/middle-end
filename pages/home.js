import React from 'react'
import Page from '../components/page'
import ListOfArticles from '../components/list-of-articles'
import getListOfArticles from '../lib/get-list-of-articles'

export default class extends React.Component {

  static async getInitialProps ({ query, req }) {
    const renderLocation = req ? 'server' : 'client'
    const { p } = query
    const page = Number(p || 1)
    const articles = await getListOfArticles('home', { page })
    console.log('home.js -> getInitialProps() -> articles', typeof articles[0].timeAgo)
    return { page, articles, renderLocation }
  }

  render () {
    console.log('This page was rendered on the ', this.props.renderLocation)
    console.log('home.js -> begin render of ListOfArticles -> this.props ', this.props.articles[0])
    const { page, url, articles,renderLocation } = this.props
    const offset = (page - 1) * 12

    return <Page>
            <ListOfArticles page={page} offset={offset} articles={articles} />
           </Page>
  }

}
