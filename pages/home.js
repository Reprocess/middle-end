import React, { Component } from 'react'
import base64 from 'base-64'
import Page from '../components/page'
import ArticlesReactive from '../components/articles-reactive'
import Sidebar from '../components/sidebar'
import { getArticles, getPageOfArticles, getAllCategories, getPopularityArticles, getCommentsForSidebar, getAllTags } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query }) {

    let articles = [];
    if (query.category) {
      articles = await getArticles(base64.decode(query.category));
    } else if (query.tag) {
      articles = await getArticles(base64.decode(query.tag), 'tags');
    } else {
      if (query.page) {
        articles = await getPageOfArticles(query.page);
      } else {
        articles = await getPageOfArticles();
      }
    }
    
    const popularityArticles = await getPopularityArticles();
    const categories = await getAllCategories();
    const comments = await getCommentsForSidebar();
    const tags = await getAllTags();

    return { articles, categories, popularityArticles, comments, tags }
  }

  render () {

    const { articles, categories, popularityArticles, comments, tags } = this.props
    return <Page
             categories={categories}
             tags={tags}
             >
             <ArticlesReactive articles={articles} />
             <Sidebar categories={categories} articles={articles} popularityArticles={popularityArticles} comments={comments} />
           </Page>
  }

}
