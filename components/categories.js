import Link from 'next/link'
import uuidV4 from 'uuid/v4'
import base64 from 'base-64'

const ArticlesView = ({ categories }) => (
    <div>
        <Link prefetch
            key={uuidV4()}
            href={'/'}>
            <a>all</a>
        </Link>
        {categories.map((category) => {
            const href = base64.encode(category);
            return (
                <Link prefetch
                    key={uuidV4()}
                    href={`/?category=${href}`}>
                        <a> | {category}</a>
                </Link>
            )
        })}
    </div>
)

export default ArticlesView

ArticlesView.propTypes = {
  categories: React.PropTypes.array,
}
