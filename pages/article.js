import React from 'react'
import Page from '../components/page'
import Article from '../components/article'
import getArticle from '../lib/get-article'
import getComments from '../lib/get-comments'

export default class extends React.Component {

  static async getInitialProps ({ req, query: { id } }) {
    console.log('pages/article.js -> getInitialProps -> id ->', id)
    const story = await getArticle(id)
    const comments = story
      ? req
        ? await getComments(story.comments)
        : null
      : null
    return { story, comments, id }
  }

  constructor (props) {
    super(props)
    this.state = {}
    console.log('pages/article.js -> props ->', props)
  }

  componentDidMount () {
    if (!this.props.comments) {
      // populate comments client side
      getComments(this.props.story.comments)
      .then((comments) => {
        this.setState({ comments })
      })
      .catch((err) => {
        // TODO: handle error
      })
    }
  }

  render () {
    const { story } = this.props
    const comments = this.state.comments || this.props.comments
    console.log('pages/article.js -> render -> story ->', story)
    console.log('pages/article.js -> render -> comments ->', comments)
    return <Page>
      <Article story={story} comments={comments} />
    </Page>
  }
}
