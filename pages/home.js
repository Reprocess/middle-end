import React, { Component } from 'react'
import base64 from 'base-64'
import Page from '../components/page'
import ArticlesReactive from '../components/articles-reactive'
import Sidebar from '../components/sidebar'
import { getArticles, getPageOfArticles, getAllCategories, getPopularityArticles, getCommentsForSidebar, getLastArticles, getAllArticlesCount, getCategoryArticlesCount } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query }) {

    let articles = [];
    let articlesCount;
    let currentPage = 1;
    let currentCategory = false;
    if (query.category) {
      const category = base64.decode(query.category);
      currentCategory = query.category;
      articlesCount = await getCategoryArticlesCount(category);
      if (query.page) {
        articles = await getArticles(category, parseInt(query.page));
        currentPage = parseInt(query.page);
      } else {
        articles = await getArticles(category);
      }
    } else {
      articlesCount = await getAllArticlesCount();
      if (query.page) {
        articles = await getPageOfArticles(parseInt(query.page));
        currentPage = parseInt(query.page);
      } else {
        articles = await getPageOfArticles();
      }
    }
    
    const lastArticles = await getLastArticles();
    const popularityArticles = await getPopularityArticles();
    const categories = await getAllCategories();
    const comments = await getCommentsForSidebar();

    return { articles, categories, popularityArticles, comments, lastArticles, articlesCount, currentPage, currentCategory }
  }

  render () {

    const { articles, categories, popularityArticles, comments, lastArticles, articlesCount, currentPage, currentCategory } = this.props
    return <Page
             categories={categories}
             >
             <ArticlesReactive
              articles={articles}
              articlesCount={articlesCount}
              currentPage={currentPage}
              currentCategory={currentCategory}
              />
             <Sidebar
              categories={categories}
              articles={articles}
              popularityArticles={popularityArticles}
              comments={comments}
              lastArticles={lastArticles}
              />
           </Page>
  }

}
