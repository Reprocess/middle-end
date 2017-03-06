import React, { Component } from 'react'
import ArticleStoryView from './article-story-view'
import { observeArticleStory } from '../lib/observables'

export default class extends Component {

  constructor (props) {

    super(props)
    this.state = props
  }

  componentDidMount () {

    const { id } = this.props
    this.unsubscribe = observeArticleStory(id, (data) => {
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {

    this.unsubscribe()
  }

  render () {

    const { editorState } = this.state
    return <ArticleStoryView editorState={editorState} />
  }

}
