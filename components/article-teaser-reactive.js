import React, { Component } from 'react'
import ArticleTeaserView from './article-teaser-view'
import { observe } from '../lib/get-article'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    this.unsubscribe = observe(this.props.id, (data) => {
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
