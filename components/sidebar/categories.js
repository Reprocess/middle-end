import Link from 'next/prefetch'
import uuidV4 from 'uuid/v4'

const Categories = ({ categories }) => (
    <div>
        <Link
            key={uuidV4()}
            href={'/'}>
            <a>all<br /></a>
        </Link>
        {categories.map((category) => {
            const href = "/?category=" + category;
            return (
                <Link
                    key={uuidV4()}
                    href={href}>
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
