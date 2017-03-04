export default ({ editorState }) => {
  console.log('Story -> story ->', editorState)
  console.log('Story -> typeof story ->', typeof editorState)
  const stringifiedStoryEditorState = JSON.stringify(editorState);
  return <div>
    <div className="title">
      {stringifiedStoryEditorState}
    </div>
    <style jsx>{`
      .title {
        font-size: 15px;
        margin-bottom: 3px;
      }

      .title > a {
        color: #000;
        text-decoration: none;
      }

      .title > a:visited {
        color: #828282;
      }

      .meta {
        font-size: 12px;
      }

      .source {
        font-size: 12px;
        display: inline-block;
        margin-left: 5px;
      }

      .source a, .meta a {
        color: #828282;
        text-decoration: none;
      }

      .source a:hover, .meta a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
}
