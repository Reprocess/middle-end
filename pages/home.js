import React, { Component } from 'react'
import atob from 'atob'
import Page from '../components/page'
import ArticlesReactive from '../components/articles-reactive'
import Sidebar from '../components/sidebar'
import { getArticles, getAllArticles, getAllCategories, getPopularityArticles, getCommentsForSidebar } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query }) {

    let articles = [];
    if (query.category) {
      articles = await getArticles(scope.atob(query.category));
    } else {
      articles = await getAllArticles();
    }
    console.log(query.category);
    const popularityArticles = await getPopularityArticles();
    const categories = await getAllCategories();
    const comments = await getCommentsForSidebar();

    return { articles, categories, popularityArticles, comments }
  }

  render () {

    const { articles, categories, popularityArticles, comments } = this.props
    return <Page
             categories={categories}
             >
             <ArticlesReactive articles={articles} />
             <Sidebar categories={categories} articles={articles} popularityArticles={popularityArticles} comments={comments} />
           </Page>
  }

}
