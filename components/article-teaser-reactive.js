import React, { Component } from 'react'
import ArticleTeaserView from './article-teaser-view'
import { observe } from '../lib/get-article'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    console.log('ArticleTeaserReactive -> componentDidMount()')
    this.unsubscribe = observe(this.props.id, (data) => {
      console.log('observe is about to invoke setState using the data from firebase')
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    console.log('ArticleTeaserReactive render()')
    return <ArticleTeaserView {...this.state} />
  }

}
