import React from 'react'
import Article from './article'
import { observe } from '../lib/get-item'

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    console.log('updating-article.js -> componentDidMount -> this.state', this.state)
    console.log('updating-article.js -> componentDidMount -> this.props', this.props)
    this.unsubscribe = observe(this.props.id, (data) => {
      if (data) this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    console.log('updating article did render', this.props)
    return <Article {...this.state} />
  }

}
