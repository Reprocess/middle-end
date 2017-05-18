import React, { Component } from 'react'
import Page from '../components/page'
import ArticleStoryReactive from '../components/article-story-reactive'
import CommentForm from '../components/comment-form'
import CommentsList from '../components/comments-list'
import { getArticle, getComments } from '../firebase'

export default class extends Component {

  static async getInitialProps ({ query: { id } }) {

    const story = await getArticle(id)
    const comments = await getComments(id)
    console.log(comments);
    return { story, comments, id }
  }

  render () {

    const { id, story, comments } = this.props
    return <Page>
             <ArticleStoryReactive id={id} story={story} />
             { comments !== null ? <CommentsList comments={comments} /> : <div/>}
             <CommentForm id={id} />
           </Page>
  }
}
