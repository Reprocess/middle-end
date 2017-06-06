import uuidV4 from 'uuid/v4';
import Link from 'next/link';
import Moment from 'react-moment'

const popularAndComments = ({ articles, comments, selectedTab, handleClickOnTab }) => (
  <div className="popular-and-comments-container">
    <ul>
      <li
        className={selectedTab === 'popular' ? 'selected tab' : 'tab'}
        onClick={() => handleClickOnTab('popular')}
        >
        <h4>Popular</h4>
      </li>
      <li
        className={selectedTab === 'comments' ? 'selected tab' : 'tab'}
        onClick={() => handleClickOnTab('comments')}
        >
        <h4>Comments</h4>
      </li>
    </ul>
    <div className="tab-container">
      { selectedTab === 'popular' ? <div>
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
      </div> : <div/>}
      { selectedTab === 'comments' ? <div>
        <div 
          key={uuidV4()}
          className="article-container">
          { comments !== null ? comments.map(comment => (
            <div>
              <h5 className="comment-username">{comment.name} says:</h5>
              <Link prefetch href={`/article?id=${comment.articleKey}`}>
                <a className="comment-text">{comment.comment}</a>
              </Link>
            </div>
          )) : 
          <h5 className="no-comments">There is no comments</h5>}
          
        </div>
      </div> : <div/>}
    </div>
    <style jsx>{`
      .popular-and-comments-container {
        margin-bottom: 35px;
      }

      ul {
        width: 100%;
        margin: 0;
        display: table;
        border-collapse: separate;
        border-spacing: 1px 0;
        list-style: none;
        letter-spacing: 0;
      }

      li {
        background: #f5f5f5;
        display: table-cell;
        border: 1px solid #e1e1e1;
        padding: 0;
        text-align: center;
        cursor: pointer;
      }

      .selected {
        background: #fff;
        border-bottom: 1px solid #fff;
      }

      h4 {
        display: block;
        padding: 8px 5px 8px 0;
        color: #555;
        transition: all .07s ease;
        font-size: 13px;
        line-height: 21px;
        font-weight: 400;
      }

      .tab-container {
        border: 1px solid #e1e1e1;
        margin: 0 1px;
        border-top: 0px;
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

      a:hover {
        text-decoration: underline;
      }

      img {
        float: left;
        overflow: hidden;
        margin-right: 10px;
        transition: all .14s ease;
        display:block;
        width: 52px;
        height: 52px;
        vertical-align: middle;
        object-fit: cover;
      }

      .article-container {
        padding: 15px 15px 20px;
        min-height: 95px;
        border-bottom: 1px solid #e1e1e1;
      }

      .article-container:last-child {
        border-bottom: 0;
      }

      .meta {
        font-size: 10px;
        line-height: 1.4;
        color: #aaa;
        font-weight: 400;
        text-transform: capitalize;
      }

      .comment-username {
        margin-bottom: 0;
        word-wrap: break-word;
        font-size: 13px;
        line-height: 21px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: #797979;
      }

      .comment-text {
        color: #494949;
        font-weight: 600;
        text-decoration: none;
        padding: 8px 5px 8px 0;
        transition: all .07s ease;
        vertical-algin: baseline;
        text-decoration: none;
        word-wrap: break-word;
        font-size: 13px;
      }

      .no-comments {
        margin-bottom: 0;
        word-wrap: break-word;
        font-size: 18px;
        line-height: 21px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: #797979;
        text-align: center;
        margin-top: 20px;
      }
    `}</style>
  </div>
)

export default popularAndComments

popularAndComments.propTypes = {
  articles: React.PropTypes.array.isRequired,
}
