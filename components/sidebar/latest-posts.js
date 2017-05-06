import uuidV4 from 'uuid/v4';
import Link from 'next/link';

const LatestPosts = ({ articles }) => (
    <div>
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
