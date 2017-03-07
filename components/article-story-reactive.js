import React, { Component } from 'react'
import ArticleStoryView from './article-story-view'
import { observeArticleStory } from '../lib/observables'

class ArticleStoryReactive extends Component {

  constructor (props) {

    super(props)
    this.state = props
    console.log('ArticleStoryReactive', this.state)
  }

  componentDidMount () {

    const { id, story } = this.props
    console.log('ArticleStoryReactive componentDidMount() -> id', id)
    console.log('ArticleStoryReactive componentDidMount() -> story', story)
    this.unsubscribe = observeArticleStory(id, (data) => {
      console.log('ArticleStoryReactive observeArticleStory() -> id', id)
      console.log('ArticleStoryReactive observeArticleStory() -> data', data)
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {

    this.unsubscribe()
  }

  render () {

    const { state } = this.state
    console.log('ArticleStoryReactive -> state', state)

    return <ArticleStoryView {...state} />
  }

}

export default ArticleStoryReactive

ArticleStoryReactive.propTypes = {
  id: React.PropTypes.string.isRequired,
  story: React.PropTypes.object.isRequired,
}
