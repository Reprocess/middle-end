import uuidV4 from 'uuid/v4';

const LatestPosts = ({ articles }) => (
    <div>
        {articles.map((article) => (
            <h4 key={uuidV4()}>{article.title}</h4>
        ))}
    </div>
)

export default LatestPosts

LatestPosts.propTypes = {
    articles: React.PropTypes.array.isRequired,
}
