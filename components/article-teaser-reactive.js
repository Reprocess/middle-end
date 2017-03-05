import React, { Component } from 'react'
import ArticleTeaserView from './article-teaser-view'
import { observeArticleMeta } from '../lib/observables'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    const { id } = this.props
    this.unsubscribe = observeArticleMeta(id, (data) => {
      console.log('observe is about to invoke setState using the data from firebase', data)
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const state = this.state
    console.log('ArticleTeaserReactive render()')
    return <ArticleTeaserView {...state} />
  }

}
