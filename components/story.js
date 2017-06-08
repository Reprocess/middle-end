const Story = ({ stringifiedStoryEditorState }) => {
  const parsedStoryEditorState = JSON.parse(stringifiedStoryEditorState);
  return (
    <div>
      <div className="title">
        {stringifiedStoryEditorState}
        {parsedStoryEditorState.blocks.map((value, key) => (
          <div key={key}>
              {value.type === "atomic:image" && <img src={value.data.src}/>}
              {value.type === "unstyled" && <p>{value.text}</p>}
              {value.type === "atomic" && parsedStoryEditorState.entityMap[value.entityRanges[0].key].type === 'embed' &&
              parsedStoryEditorState.entityMap[value.entityRanges[0].key].data.url.includes('youtube') &&
              <iframe width="560" height="315" src={parsedStoryEditorState.entityMap[value.entityRanges[0].key].data.url.replace('watch?v=', 'embed/')} frameborder="0" allowfullscreen></iframe>}
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
      `}</style>
  </div>
  )
}


Story.propTypes = {
  stringifiedStoryEditorState: React.PropTypes.string.isRequired
}

export default Story
