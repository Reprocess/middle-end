import React from 'react'
import Article from './article'
import { observe } from '../lib/get-item'

export default class extends React.Component {

  constructor (props) {
    super(props)
    this.state = props
  }

  componentDidMount () {
    console.log('updating article did mount')
    this.unsubscribe = observe(this.props.id, (data) => {
      console.log('data inside observe callback, inside updating article js', data)
      this.setState(data)
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    console.log('updating article did render')
    return <Article {...this.state} />
  }

}
