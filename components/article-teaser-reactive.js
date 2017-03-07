import React, { Component } from 'react'
import ArticleTeaserView from './article-teaser-view'
import { observeArticleMeta } from '../firebase/observables'

class ArticleTeaserReactive extends Component {

  constructor (props) {

    super(props)
    this.state = props
  }

  componentDidMount () {

    const { id } = this.props
    this.unsubscribe = observeArticleMeta(id, (data) => {
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {

    this.unsubscribe()
  }

  render () {

    const state = this.state
    return <ArticleTeaserView {...state} />
  }

}

export default ArticleTeaserReactive

ArticleTeaserReactive.propTypes = {
  id: React.PropTypes.string.isRequired,
}
