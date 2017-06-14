const Story = ({ stringifiedStoryEditorState }) => {
  const parsedStoryEditorState = JSON.parse(stringifiedStoryEditorState);
  console.log(parsedStoryEditorState)
  return (
    <div>
      <div className="title">
        {stringifiedStoryEditorState}
        {parsedStoryEditorState.blocks.map((value, key) => (
          <div key={key}>
              {value.type === "atomic:image" && <div className="image"><img src={value.data.src}/><p>{value.text}</p></div>}
              {value.type === "unstyled" && <p>{value.text}</p>}
              {value.type === "atomic" && parsedStoryEditorState.entityMap[value.entityRanges[0].key].type === 'embed' &&
              parsedStoryEditorState.entityMap[value.entityRanges[0].key].data.url.includes('youtube') &&
              <iframe width="560" height="315" src={parsedStoryEditorState.entityMap[value.entityRanges[0].key].data.url.replace('watch?v=', 'embed/')} frameborder="0" allowfullscreen></iframe>}
              {value.type === "blockquote" && <div className="blockquote">{value.text}</div>}
              {value.type === "header-three" && <h3>{value.text}</h3>}
              {value.type === "ordered-list-item" && <li>{value.text}</li>}
          </div>
        ))}
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

        .image {
          background: #f0f0f0;
          text-align: center;
          margin: 15px 0;
          padding: 15px 0;
        }

        .image img {
          margin-bottom: 10px;
        }

        .blockquote {
          border-left: 5px solid #4CA8DE;
          padding: 10px 15px;
          font-size: 1.2em;
          background: #f0f0f0;
        }
      `}</style>
  </div>
  )
}


Story.propTypes = {
  stringifiedStoryEditorState: React.PropTypes.string.isRequired
}

export default Story
