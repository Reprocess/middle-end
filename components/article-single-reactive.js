import React, { Component } from 'react'
import ArticleSingleView from './article-single-view'
import { observe } from '../lib/get-article'
import firebaseRefs from '../config/firebase-refs'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    const { id } = this.props
    console.log('ArticleSingleReactive -> componentDidMount() -> id', id)
    this.unsubscribe = observe(id, 'single', (data) => {
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
