import React, { Component } from 'react'
import Page from '../components/page'
import { getArticles, getAllCategories } from '../firebase'
import ArticlesReactive from '../components/articles-reactive'
import Sidebar from '../components/sidebar'

export default class extends Component {

  static async getInitialProps ({ query }) {
    const articles = await getArticles('home');
    const categories = await getAllCategories();
    return { articles, categories }
  }

  render () {

    const { articles, categories } = this.props

    return <Page>
             <Sidebar categories={categories} articles={articles} />
             <ArticlesReactive articles={articles} />
           </Page>
  }

}
