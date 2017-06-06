import uuidV4 from 'uuid/v4';
import Link from 'next/link';
import Moment from 'react-moment'

const LatestPosts = ({ articles }) => (
  <div>
    <h3>LATEST POSTS</h3>
      <ul>
        {articles.map((article) => (
          <div 
            key={uuidV4()}
            className="article-container">
            <Link prefetch href={`/article?id=${article.id}`}>
              <a>
                <img
                  src={article.teaser}
                  alt={article.title}
                  />
              </a>
            </Link>
            <Link prefetch href={`/article?id=${article.id}`}>
              <a>
                <h5>{article.title}</h5>
              </a>
            </Link>
            <p className="meta">
              {article.author} | <Moment format={(new Date().getFullYear() - new Date(article.date).getFullYear()) > 0 ? "MMMM DD, YYYY" : "MMMM DD"}>{article.date}</Moment>
            </p>
          </div>
        ))}
      </ul>
    <style jsx>{`
      h3 {
        color: #212121;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0;
        margin-top: 0;
        line-height: 1.8;
        text-transform: uppercase;
        padding-bottom: 8px;
      }

      h3:after {
        content: "";
        margin: 4px 0 20px;
        height: 0;
        display: block;
        position: relative;
        width: 38px;
        border-bottom: 5px solid #830d0d;
      }

      ul {
        margin-left: 0;
        margin-bottom: 35px;
        border-top: 1px solid #e5e5e5;
      }

      .article-container:hover {
        background-color: #fafafa;
      }

      .article-container:hover img {
        background-color: #830d3d;
      }

      a {
        text-decoration: none;
      }

      a h5 {
        color: #303336;
        font-size: 13px;
        font-weight: 600;
        margin: 0 0 6px;
        line-height: 1.4;
        letter-spacing: 0;
        display: block;
      }

      img {
        float: left;
        padding: 3px;
        overflow: hidden;
        background: #e5e5e5;
        margin-right: 10px;
        transition: all .14s ease;
        display:block;
        width: 62px;
        height: 62px;
        vertical-align: middle;
        object-fit: cover;
      }

      .article-container {
        padding: 15px 0 5px;
        min-height: 95px;
        border-bottom: 1px solid #e1e1e1;
      }

      .meta {
        font-size: 10px;
        line-height: 1.4;
        color: #aaa;
        font-weight: 400;
        text-transform: capitalize;
      }
    `}</style>
  </div>
)

export default LatestPosts

LatestPosts.propTypes = {
  articles: React.PropTypes.array.isRequired,
}
