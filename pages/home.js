import React, { Component } from 'react'
import Page from '../components/page'
import ArticlesReactive from '../components/articles-reactive'
import Sidebar from '../components/sidebar'
import { getArticles, getAllArticles, getAllCategories, getPopularityArticles } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query }) {

    let articles = [];
    if (query.category) {
      articles = await getArticles(query.category);
    } else {
      articles = await getAllArticles();
    }
    const popularityArticles = await getPopularityArticles();
    const categories = await getAllCategories();

    return { articles, categories, popularityArticles }
  }

  render () {

    const { articles, categories, popularityArticles } = this.props
    return <Page>
             <Sidebar categories={categories} articles={articles} popularityArticles={popularityArticles} />
             <ArticlesReactive articles={articles} />
           </Page>
  }

}
