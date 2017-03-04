import ArticleTeaserReactive from './article-teaser-reactive'
import Link from 'next/prefetch'

export default ({ articles, page=1, offset=null }) => {

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
      }

      .article-teaser {
        flex: 100;
        display: inline-block;
      }
    `}</style>
  </div>
)}
