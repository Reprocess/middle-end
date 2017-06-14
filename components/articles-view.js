import ArticleTeaserReactive from './article-teaser-reactive'
import uuidV4 from 'uuid/v4'

const ArticlesView = ({ articles, articlesCount, currentPage, currentCategory }) => {
  const pagesCount = articlesCount % 10 !== 0 ? Math.floor( articlesCount / 10 ) + 1 : articlesCount / 10;
  console.log(currentPage);
  return (
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
      <div className="pagination">
        <span className="pages">
          Page {currentPage} of {pagesCount}
        </span>
        { currentPage !== 1 && currentCategory ? 
          <a href={`/?category=${currentCategory}&page=${currentPage - 1}`} className="page">
            «
          </a>
        : <span />}
        { currentPage !== 1 && !currentCategory ? 
          <a href={`/?&page=${currentPage - 1}`} className="page">
            «
          </a>
        : <span />}
        {[...Array(pagesCount)].map((data, index) => {
          if (index + 1 === currentPage) {
            return (
              <span className="current" key={uuidV4()}>
                {index + 1}
              </span>
            )
          } else {
            const href = currentCategory ? `/?category=${currentCategory}&page=${index + 1}` : `/?page=${index + 1}`;
            return (
              <a href={href} key={uuidV4()} className="page">
                {index + 1}
              </a>
            )
          }
        })}
        { currentPage !== pagesCount && currentCategory ? 
          <a href={`/?category=${currentCategory}&page=${currentPage + 1}`} className="page">
            »
          </a>
        : <span />}
        { currentPage !== pagesCount && !currentCategory ? 
          <a href={`/?page=${currentPage + 1}`} className="page">
            »
          </a>
        : <span />}
      </div>

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

        .pagination {
          clear: both;
          font-size: 12px;
          text-align: center;
          margin-bottom: 35px;
        }

        .pages {
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          background: #fff;
          border: 1px solid #d1d7dc;
          line-height: 1;
          padding: 10px 14px;
          margin: 3px 4px;
          color: #999;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04)
        }

        .current {
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          background: #fdfdfd;
          border: 1px solid #efefef;
          line-height: 1;
          padding: 10px 14px;
          margin: 3px 4px;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04)
        }

        .page {
          color: #0093d0;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          background: #fff;
          border: 1px solid #d1d7dc;
          line-height: 1;
          padding: 10px 14px;
          margin: 3px 4px;
          border-radius: 2px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .page:hover {
          border-color: #d2d2d2;
          color: #e84c3d;
          background: #fdfdfd;
        }

        @media (max-width: 1200px) {
          .articles-list {
            width: 594px;
            padding: 0 5px;
          }
        }

        @media (max-width: 960px) {
          .articles-list {
            width: 66.66666667%;
            padding: 0 15px;
          }
        }

        @media (max-width: 767px) {
          .articles-list {
            width: 400px;
            padding: 0 10px;
          }
        }

        @media (max-width: 479px) {
          .articles-list {
            width: 300px;
          }
        }
      `}</style>
    </div>
  )
}


ArticlesView.propTypes = {
  articles: React.PropTypes.array.isRequired
}

export default ArticlesView
