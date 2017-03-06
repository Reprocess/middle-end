import Page from '../components/page'
import Story from '../components/story'

export default ({editorState}) => {
  console.log('ArticleSingleView -> story ->', editorState)
  console.log('ArticleSingleView -> typeof story ->', typeof editorState)
  console.log('ArticleSingleView render()')
  return (
    <div className="item">
      <Story editorState={editorState} />

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
