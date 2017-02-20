import Link from 'next/prefetch'

export default () => (
  <ul>
    <Item href="/newest">new</Item>
    <Item href="/show">show</Item>
    <Item href="/ask">ask</Item>
    <Item href="/jobs">jobs</Item>
    <Item href="/submit">submit</Item>
    <Item href="/articles">articles</Item>

    <style jsx>{`
      ul {
        list-style-type: none;
      }
    `}</style>
  </ul>
)

const Item = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a>{ children }</a>
    </Link>

    <style jsx>{`
      li {
        display: inline-block;
      }

      a {
        display: inline-block;
        padding: 10px;
        font-size: 11px;
        text-transform: uppercase;
        text-decoration: none;
        color: #000;
      }

      a:hover {
        color: #fff;
      }
    `}</style>
  </li>
)
