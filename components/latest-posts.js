import Link from 'next/link'
import uuidV4 from 'uuid/v4'

const LatestPosts = ({ postsArray }) => (
    <div>
        <h4>First Post</h4>
        <h4>Second Post</h4>
    </div>
)

export default LatestPosts

LatestPosts.propTypes = {
    postsArray: React.PropTypes.array,
}
