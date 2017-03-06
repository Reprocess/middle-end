import React from 'react'
import Page from '../components/page'
import ArticlesReactive from '../components/articles-reactive'
import getArticles from '../lib/get-articles'

export default class extends React.Component {

  static async getInitialProps () {

    const articles = await getArticles('home')
    return { articles }
  }

  render () {

    const { articles } = this.props

    return <Page>
             <ArticlesReactive articles={articles} />
           </Page>
  }

}
