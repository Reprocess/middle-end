import ArticleTeaserReactive from './article-teaser-reactive'

const ArticlesView = ({ articles }) => {

  console.log('ArticlesView -> typeof articles ->', articles)

  return (
  <div>
    {
      articles.map((article, i) => (
        <div key={article.id} className="article">
          <div className="article-teaser">
            <ArticleTeaserReactive {...article} />
          </div>
        </div>
      ))
    }

    <style jsx>{`
      .article {
        display: flex;
        margin: 10px 0;
        padding: 10px;
        background-color: aqua;
      }

      .article-teaser {
        flex: 100;
        display: inline-block;
      }
    `}</style>
  </div>
)}

ArticlesView.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ArticlesView
