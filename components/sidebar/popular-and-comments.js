import uuidV4 from 'uuid/v4';
import Link from 'next/link';

const popularAndComments = ({ articles }) => (
    <div>
        <h4>POPULAR</h4>
        {articles.map((article) => (
            <Link key={uuidV4()} prefetch href={`/article?id=${article.id}`}>
                <a>
                    {article.title}
                <br />
                </a>
            </Link>
        ))}
        <h4>COMMENTS</h4>
        <h5>Some dummy comment</h5>
    </div>
)

export default popularAndComments

popularAndComments.propTypes = {
    articles: React.PropTypes.array.isRequired,
}
