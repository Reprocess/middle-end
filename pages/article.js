import React from 'react'
import Page from '../components/page'
import ArticleSingleReactive from '../components/article-single-reactive'
import getArticle from '../lib/get-article'

export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    const story = await getArticle(id)
    return { story, id }
  }

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    const { id, story } = this.props
    console.log('pages/article.js -> render()')
    return <Page>
      <ArticleSingleReactive id={id} story={story} />
    </Page>
  }
}
