import React, { Component } from 'react'
import ListOfArticlesView from './list-of-articles-view'
import { observeArticlesMetaList } from '../lib/observables'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
    console.log('constructor -> this.state', this.state)
  }

  componentDidMount () {
    const { articles } = this.props
    console.log('componentDidMount() -> articles', articles)
    this.unsubscribe = observeArticlesMetaList(() => {
      this.setState({newArticle: true})
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = this.state
    console.log('ListOfArticlesReactive render() -> state', state)
    return <ListOfArticlesView {...state} />
  }

}
