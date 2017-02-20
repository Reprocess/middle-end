import React from 'react'
import Article from './article'
import { observe } from '../lib/get-item'

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    this.unsubscribe = observe(this.props.id, (data) => this.setState(data))
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return <Article {...this.state} />
  }

}
