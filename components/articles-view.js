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
        margin-bottom: 40px;
        border-bottom: 1px solid #e1e1e1;
      }

      .articles-list {
        width: 730px;
        float: left;
      }
    `}</style>
  </div>
)


ArticlesView.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ArticlesView
