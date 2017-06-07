import Link from 'next/link'
import uuidV4 from 'uuid/v4'

const Categories = ({ categories }) => (
  <div className="categories-list">
    <h3>CATEGORIES</h3>
    <div className="category-container">
      <Link
        key={uuidV4()}
        href={'/'}
        prefetch>
        <a>All</a>
      </Link>
    </div>
    {categories.map((category) => {
      const href = "/?category=" + category;
      return (
        <div
          className="category-container"
          key={uuidV4()}
          >
          <a href={href}>{category}</a>
        </div>
      )
    })}
    <style jsx>{`
        h3 {
        color: #212121;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 0;
        margin-top: 0;
        line-height: 1.8;
        text-transform: uppercase;
        padding-bottom: 8px;
      }

      h3:after {
        content: "";
        margin: 4px 0 20px;
        height: 0;
        display: block;
        position: relative;
        width: 38px;
        border-bottom: 5px solid #830d0d;
      }

      .category-container {
        border-bottom: 1px solid #e2e2e2;
        padding: 7px 4px 7px 0;
      }

      .category-container:hover {
        background: #fafafa;
      }

      a {
        margin-left: 5px;
        color: #91979d;
        padding: 8px 5px 8px 0;
        text-decoration: none;
        transition: all .07s ease;
        font-size: 13px;
        line-height: 21px;
        font-weight: 400;
        letter-spacing: 0;
        vertical-align: baseline;
      }

      a:hover {
        color: #515151;
      }

      .categories-list {
        margin-bottom: 35px;
      }
    `}</style>
  </div>
)

export default Categories

Categories.propTypes = {
  categories: React.PropTypes.array.isRequired,
}
