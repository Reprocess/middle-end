import Head from 'next/head'
import Paper from 'material-ui/Paper'
import React from 'react'
import Page from '../../layouts/main'
import base from '../../config/rebase'
import HomeImage from './splashImage/'
import GridList from './gridList'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  componentWillMount() {
    base.fetch('messages', {
      context: this,
      state: 'messages',
      asArray: true,
      queries: {
        limitToLast: 6,
        orderByKey: 'reverse'
      },
      then: articles => this.setState({ articles })
    })
  }


  render() {
    return (
      <div>
        <Page>
          <Head>
            <title>Blog test</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
          </Head>
          <div className="home">
            <HomeImage />
            <div className="col-md-12">
              {this.state.articles.map((item, index) => (
                <Paper zDepth={2}>
                  <div key={index} data-postid={item.key}>{item.message}</div>
                </Paper>
              ))}
              <GridList />
            </div>
          </div>
        </Page>
      </div>
    )
  }
}


