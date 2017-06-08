import React, { Component } from 'react'
import Page from '../components/page'
import ArticleStoryReactive from '../components/article-story-reactive'
import CommentForm from '../components/comment-form'
import CommentsList from '../components/comments-list'
import { getArticle, getComments, popularityCheck, getAllCategories, getAllTags } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query: { id } }) {

    const story = await getArticle(id)
    const comments = await getComments(id)
    popularityCheck(id);
    const tags = await getAllTags();
    const categories = await getAllCategories();
    return { story, comments, id, categories, tags }
  }

  render () {

    const { id, story, comments, categories, tags } = this.props
    return <Page
             categories={categories}
             tags={tags}
             >
             <ArticleStoryReactive id={id} story={story} />
             { comments !== null ? <CommentsList comments={comments} /> : <div/>}
             <CommentForm id={id} />
           </Page>
  }
}
