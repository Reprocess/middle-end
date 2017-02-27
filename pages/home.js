import React from 'react'
import Page from '../components/page'
import ListOfArticles from '../components/list-of-articles'
import getListOfArticles from '../lib/get-list-of-articles'

export default class extends React.Component {

  static async getInitialProps ({ query, req }) {
    const renderLocation = req ? 'Server' : 'Client'
    console.log('home.js -> inside getInitial props rendered by the ', renderLocation)
    console.log('home.js -> BEFORE the data fetch -> query', query)
    const { p } = query
    const page = Number(p || 1)
    console.log('home.js -> BEFORE the data fetch -> p', p)
    console.log('home.js -> BEFORE the data fetch -> page', page)
    const articles = await getListOfArticles('blog', { page })
    console.log('home.js -> inside getInitialProps AFTER the data fetch-> articles from getListOfArticles', articles)
    return { page, articles, renderLocation }
  }

  render () {

    const { page, url, articles,renderLocation } = this.props
    const offset = (page - 1) * 12

    console.log('articles.js -> begin render of ListOfAticles -> render location -> ', renderLocation)

    return <Page>
      <ListOfArticles page={page} offset={offset} articles={articles} />
    </Page>
  }

}
