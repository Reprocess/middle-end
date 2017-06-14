import Link from 'next/link'
import Moment from 'react-moment'

const ArticleTeaserView = ({ id, title, date, lead, author, teaser }) => (
  <div className="article-teaser-view">
    <div className="article-teaser-view__wrapper">
      <Link prefetch href={`/article?id=${id}`}>
        <a className="article-teaser-view__link">
          <img src={teaser} />
        </a>
      </Link>
      <Link prefetch href={`/article?id=${id}`}>
        <a className="article-teaser-view__link">
          <div className="title">
            <h3>{title}</h3>
          </div>
        </a>
      </Link>
      <div className="meta">
        {author} | <Moment format={(new Date().getFullYear() - new Date(date).getFullYear()) > 0 ? "MMMM DD, YYYY" : "MMMM DD"}>{date}</Moment>
      </div>
      <Link prefetch href={`/article?id=${id}`}>
        <a className="article-teaser-view__link">
          <div className="lead">
            {lead}
          </div>
        </a>
      </Link>
      <Link prefetch href={`/article?id=${id}`}>
        <a className="article-teaser-view__link">
          <div className="read-more">
            Read more <i className="fa fa-chevron-right"></i>
          </div>
        </a>
      </Link>
    </div>
    <style jsx>{`
      a {
        text-decoration: none;
      }

      .article-teaser-view__link img {
        width: 100%;
        margin-bottom: 19px;
      }

      .title h3 {
        color: #1f2123;
        transition: color 0.18s ease;
        font-size: 27px;
        margin-bottom: 5px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: -1px;
      }

      .title h3:hover {
        color: #ff6c6d;
      }

      .meta {
        margin-bottom: 5px;
      }

      .lead {
        font-family: "Lora", serif;
        font-size: 15px;
        margin-bottom: 13px;
        color: #444;
        letter-spacing: 0.2px;
        font-weight: 400;
        line-height: 1.6;
      }

      .read-more {
        background-color: #830d0d;
        color: #fff;
        font-weight: 400;
        padding: 5px 12px 5px 22px;
        font-size: 12px;
        font-family: 'Open Sans', sans-serif;
        margin: 4px 0 35px 1px;
        transition: all 0.15s ease-in-out;
        text-transform: capitalize;
        width: auto;
        line-height: 1.6;
        display: inline-block;
        box-sizing: border-box;
      }

      .read-more i {
        font-size: 9px;
        color: #fff;
        margin-left: 15px;
      }

      .read-more:hover {
        background-color: #e82028;
      }

    `}</style>
  </div>
)

ArticleTeaserView.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  lead: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
}

export default ArticleTeaserView
