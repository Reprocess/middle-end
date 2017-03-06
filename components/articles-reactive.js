import React, { Component } from 'react'
import ArticlesView from './articles-view'
import { observeArticlesMetaList } from '../lib/observables'

export default class extends Component {

  constructor (props) {

    super(props)
    this.state = props
  }

  componentDidMount () {

    const { articles } = this.props
    this.unsubscribe = observeArticlesMetaList(() => {
      this.setState({ newArticle: true })
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
