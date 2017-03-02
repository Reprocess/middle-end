import React, { Component } from 'react'
import ArticleTeaserView from './article-teaser-view'
import { observe } from '../lib/get-article'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    console.log('article-teaser-reactive.js -> componentDidMount -> this.props', this.props)
    this.unsubscribe = observe(this.props.id, (data) => {
      console.log('observe is about to invoke setState using the data from firebase')
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    console.log('ArticleTeaserReactive rendered', this.props)
    return <ArticleTeaserView {...this.state} />
  }

}
