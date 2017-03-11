import React, { Component } from 'react'

import {
  Editor,
  createEditorState,
} from 'medium-draft';

class ArticleStoryView extends Component {

  constructor (props) {

    super(props)
    this.state = props

    const { story } = this.props
    const data = JSON.parse(story.editorState)

    this.state = {
      editorState: createEditorState(data), // with content
    }

    this.onChange = (editorState) => {
      this.setState({ editorState });
    };
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="article">
        <Editor
          editorState={editorState}
          onChange={this.onChange} />

        <style jsx>{`
          .article {
            padding: 10px 29px;
          }

          .form {
            padding: 15px 0;
          }

          .loading {
            font-size: 13px;
          }

          @media (max-width: 750px) {
            .item {
              padding: 8px 0px;
            }
          }



        `}</style>
      </div>
    )
  }
}

ArticleStoryView.propTypes = {
  story: React.PropTypes.object.isRequired
}

export default ArticleStoryView
