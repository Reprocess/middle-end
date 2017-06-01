import uuidV4 from 'uuid/v4';
import Link from 'next/link';

const LatestPosts = ({ articles }) => (
    <div>
        <h3>LATEST POSTS</h3>
        {articles.map((article) => (
            <Link key={uuidV4()} prefetch href={`/article?id=${article.id}`}>
                <a>
                    {article.title}
                <br />
                </a>
            </Link>
        ))}
    </div>
)

export default LatestPosts

LatestPosts.propTypes = {
    articles: React.PropTypes.array.isRequired,
}
