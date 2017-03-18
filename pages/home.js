import React, { Component } from 'react'
import Page from '../components/page'
import ArticlesReactive from '../components/articles-reactive'
import Categories from '../components/categories'
import { getArticles, getAllArticles, getAllCategories } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query }) {

    let articles = [];
    if (query.category) {
      articles = await getArticles(query.category);
    } else {
      articles = await getAllArticles();
    }
    const categories = await getAllCategories();

    return { articles, categories }
  }

  render () {

    const { articles, categories } = this.props
    return <Page>
             <Categories categories={categories} />
             <ArticlesReactive articles={articles} />
           </Page>
  }

}
