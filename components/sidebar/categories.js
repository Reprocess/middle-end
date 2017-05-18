import Link from 'next/link'
import uuidV4 from 'uuid/v4'

const Categories = ({ categories }) => (
    <div>
        <h3>CATEGORIES</h3>
        <Link
            key={uuidV4()}
            href={'/'}
            prefetch>
            <a>all<br /></a>
        </Link>
        {categories.map((category) => {
            const href = "/?category=" + category;
            return (
                <Link
                    key={uuidV4()}
                    href={href}
                    prefetch>
                        <a><hr />{category}</a>
                </Link>
            )
        })}
    </div>
)

export default Categories

Categories.propTypes = {
  categories: React.PropTypes.array.isRequired,
}
