import React, { Component } from 'react'
import Story from './story'
import { observe } from '../lib/get-article'

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    console.log('updating story did mount')
    this.unsubscribe = observe(this.props.id, (data) => {
      console.log('data inside observe callback, inside updating story js', data)
      this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    console.log('updating story did render')
    return <Story {...this.state} />
  }

}
