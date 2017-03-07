import Story from '../components/story'

const ArticleStoryView = ({story, id}) => {
  return (
    <div className="item">
      <Story stringifiedStoryEditorState={'I am a string'} />

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
  story: React.PropTypes.object.isRequired
}

export default ArticleStoryView
