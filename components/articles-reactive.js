import React, { Component } from 'react'
import ArticlesView from './articles-view'
import { observeArticlesMetaList } from '../firebase/observables'

class ArticlesReactive extends Component {

  constructor (props) {

    super(props)
    this.state = props
  }

  componentDidMount () {

    const { articles } = this.props
    this.unsubscribe = observeArticlesMetaList((data) => {
      if (data) this.setState({ articles: data })
    })
  }

  componentWillUnmount () {

    this.unsubscribe()
  }

  render () {

    const state = this.state
    return <ArticlesView {...state} />
  }

}

export default ArticlesReactive

ArticlesReactive.propTypes = {
  articles: React.PropTypes.array.isRequired,
}
