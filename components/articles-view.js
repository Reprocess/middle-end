import ArticleTeaserReactive from './article-teaser-reactive'

const ArticlesView = ({ articles }) => (
  <div className="articles-list">
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

      .articles-list {
        width: 75%;
      }
    `}</style>
  </div>
)


ArticlesView.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ArticlesView
