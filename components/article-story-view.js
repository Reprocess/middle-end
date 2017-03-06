import Story from '../components/story'

const ArticleStoryView =  ({editorState}) => {

  console.log('ArticleSingleView -> editorState ->', editorState)
  console.log('ArticleSingleView -> typeof editorState ->', typeof editorState)
  const stringifiedStoryEditorState = JSON.stringify(editorState)

  return (
    <div className="item">
      <Story stringifiedStoryEditorState={stringifiedStoryEditorState} />

      <style jsx>{`
        .item {
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

ArticleStoryView.propTypes = {
  editorState: React.PropTypes.object.isRequired
}

export default ArticleStoryView
