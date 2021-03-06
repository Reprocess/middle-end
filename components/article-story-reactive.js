import React, { Component } from 'react'
import ArticleStoryView from './article-story-view'
import { observeArticleStory } from '../firebase/observables'

class ArticleStoryReactive extends Component {

  constructor (props) {

    super(props)
    this.state = props
  }

  componentDidMount () {

    const { id, story } = this.props

    this.unsubscribe = observeArticleStory(id, (data) => {
      if (data) this.setState({ story: data })
    })
  }

  componentWillUnmount () {

    this.unsubscribe()
  }

  render () {

    const state = this.state
    return <ArticleStoryView {...state} />
  }

}

export default ArticleStoryReactive

ArticleStoryReactive.propTypes = {
  id: React.PropTypes.string.isRequired,
  story: React.PropTypes.object.isRequired,
}
