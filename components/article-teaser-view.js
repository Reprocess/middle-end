import Link from 'next/prefetch'

import parse from 'url-parse'

const plural = (n, s) => s + ((n === 0 || n > 1) ? 's' : '')

const ArticleTeaserView = ({ id, title, date, url, user, score, commentsCount }) => {
  const { host } = parse(url)
  return <div>
    <div className="title">
      {
        url
          ? <a href={url}>{title}</a>
          : <Link href={`/article?id=${id}`}>
              <a>{title}</a>
            </Link>
      }
      {
        url && <span className="source">
          <a href={`http://${host}`}>{host.replace(/^www\./, '')}</a>
        </span>
      }
    </div>
    <div className="meta">
      {score}
      {' '}
      {plural(score, 'point')}
      {' '}
      by
      {' '}
      <Link href={`/user?id=${user}`}>
        <a>{user}</a>
      </Link>
      {' '}
      |
      {' '}
      <Link href={`/article?id=${id}`}>
        <a>{date}</a>
      </Link>
      {' '}
      |
      {' '}
      <Link href={`/article?id=${id}`}>
        <a>
          {commentsCount}
          {' '}
          {plural(commentsCount, 'comment')}
        </a>
      </Link>
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
}

ArticleTeaserView.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  url: React.PropTypes.string,
  user: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  commentsCount: React.PropTypes.number.isRequired
}

export default ArticleTeaserView
