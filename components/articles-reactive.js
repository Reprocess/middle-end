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
    this.unsubscribe = observeArticlesMetaList((data) => {
      if (data) this.setState({ articles: data })
    })
  }

  componentWillUnmount () {

    this.unsubscribe()
  }

  render () {

    const state = this.state
    console.log('ArticlesReactive -> ', state)
    return <ArticlesView {...state} />
  }

}
