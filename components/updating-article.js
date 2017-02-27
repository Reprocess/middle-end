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
      console.log('this does not get called, so forget this line', data)
      this.setState(data)
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
