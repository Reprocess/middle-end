import React, { Component } from 'react'
import Page from '../components/page'
import ArticleStoryReactive from '../components/article-story-reactive'
import getArticle from '../firebase/get-article'

export default class extends Component {

  static async getInitialProps ({ query: { id } }) {

    const story = await getArticle(id)
    return { story, id }
  }

  render () {

    const { id, story } = this.props
    return <Page>
             <ArticleStoryReactive id={id} story={story} />
           </Page>
  }
}
