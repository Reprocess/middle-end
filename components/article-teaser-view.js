import Link from 'next/prefetch'

const ArticleTeaserView = ({ id, title, date, lead, author }) => (
  <div className="article-teaser-view">
    <Link href={`/article?id=${id}`}>
      <a className="article-teaser-view__link">
        <div className="article-teaser-view__wrapper">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="meta">
            {author} | {date}
          </div>
          <div className="lead">
            {lead}
          </div>
        </div>
      </a>
    </Link>
    <style jsx>{`

      a {
        color: black;
        text-decoration: none;
      }

      a:visited {
        color: grey;
      }

      .title {
        font-size: 15px;
        margin-top: 3px;
      }

      .meta {
        font-size: 12px;
      }

      .lead {
        font-size: 13px;
        margin-top: 3px;
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
