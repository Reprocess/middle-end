import React from 'react'
import Page from '../components/page'
import ArticleSingleView from '../components/article-single-view'
import getArticle from '../lib/get-article'

export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    console.log('pages/article.js -> getInitialProps() -> id ->', id)
    const story = await getArticle(id)
    console.log('pages/article.js -> getInitialProps() -> story ->', story)
    return { story, id }
  }

  constructor (props) {
    super(props)
    this.state = {}
    console.log('pages/article.js -> props ->', props)
  }

  componentDidMount () {

  }

  render () {
    console.log('pages/articles.js -> render -> this.props', this.props)
    console.log('pages/articles.js -> render -> this.props', this.state)
    const { story } = this.props
    console.log('pages/article.js -> render -> story ->', story)
    return <Page>
      <ArticleSingleView story={story} />
    </Page>
  }
}
