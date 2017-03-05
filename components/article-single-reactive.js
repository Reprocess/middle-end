import React, { Component } from 'react'
import ArticleSingleView from './article-single-view'
import { observeArticleContent } from '../lib/observables'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    const { id } = this.props
    console.log('ArticleSingleReactive -> componentDidMount() -> id', id)
    this.unsubscribe = observeArticleContent(id, (data) => {
      console.log('observe invokes setState using the data from firebase', data)
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const { editorState } = this.state
    console.log('ArticleSingleReactive -> render()')
    return <ArticleSingleView editorState={editorState} />
  }

}
