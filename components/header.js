import Nav from './nav'
import Logo from './logo'
import Link from 'next/link'
import uuidV4 from 'uuid/v4'

export default ({ categories }) => (
  <div>
    <header className="float-fix">
      <div className="left">
        <span className="logo">
          <Logo />
        </span>
      </div>
      <div className="right">
        <Link
          prefetch
          href="http://traineffective.com"
          >
          <a>Learn More About TrainEffective</a>
        </Link>
      </div>

      <style jsx>{`
        .float-fix:after {
          content: "";
          display: table;
          clear: both;
        }

        header {
          font-size: 14px;
          margin-bottom: 18px;
        }

        .logo {
          margin: 0;
          display: block;
        }

        .left: {
          width: auto;
          float: left;
        }

        .right {
          float: right;
        }

        a {
          text-decoration: none;
          color: white;
          font-size: 19px;
          font-weight: 500;
          background-color: #830d0d;
          padding: 14px 0;
          min-width: 366px;
          display: inline-block;
          text-align: center;
          line-height: 16px;
          border-radius: 40px;
          -webkit-transition: all 0.9s;
          transition: all 0.9s;
          border: 3px solid transparent;
          height: 50px;
          margin: 20px 13px 21px 0;
        }

        a:hover {
          color: #830d0d!important;
          background: #fff;
          border: 3px solid #830d0d;
        }
      `}</style>
    </header>
    <div className="nav-container">
      <ul className="nav">
        <Link
          prefetch
          href="http://traineffective.com"
          >
          <li className="nav-link">
            <a className="nav-a">home</a>
          </li>
        </Link>
        <Link
          prefetch
          href="/"
          >
          <li className="nav-link">
            <a className="nav-a">blog</a>
          </li>
        </Link>
        <Link
          prefetch
          href="/"
          >
          <li className="nav-link">
            <a className="nav-a">categories</a>
            <ul className="sub-menu">
              {categories.map(category => (
                <Link
                  key={uuidV4()}
                  prefetch
                  href="/"
                  >
                  <li className="sub-menu-link">
                    <a className="sub-menu-a">{category}</a>
                  </li>
                </Link>
              ))}
            </ul>
          </li>
        </Link>
        <Link
          prefetch
          href="/about-us"
          >
          <li className="nav-link">
            <a className="nav-a">about us</a>
          </li>
        </Link>
        <Link
          prefetch
          href="http://traineffective.com/contact"
          >
          <li className="nav-link">
            <a className="nav-a">contact</a>
          </li>
        </Link>
        
      </ul>
      <style jsx>{`
        .nav-container {
          padding: 0 16px;
          width: 100%;
          box-sizing: border-box;
          height: 50px;
        }

        .nav {
          background-color: #830d0d;
          border-bottom: 4px solid #6d0909;
          border-top: 1px solid #6d0909;
          display: table;
          float: left;
          width: 100%;
          list-style: inside;
          margin: 0;
          padding: 0;
          font-size: 100%;
          vertical-align: baseline;
          height: 100%;
        }

        .nav-link:first-of-type {
          border-left: 1px solid #6d0909;
        }

        .nav-link {
          border-right: 1px solid #6d0909;
          list-style: none;
          margin: 0;
          padding: 0;
          vertical-align: middle;
          display: table-cell;
          float: none;
          cursor: pointer;
          text-align: center;
          transition: all .15s ease-in-out;
        }

        .nav-link:hover {
          background-color: #6d0909;
        }

        .nav-a {
          text-decoration: none;
          color: #fff;
          margin: 0;
          padding: 0 10px;
          font-size: 15px;
          line-height: 45px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .sub-menu {
          margin-left: -2;
          border: 4px solid #6d0909;
          width: 212px;
          position: absolute;
          background: #fff;
          margin: 0;
          z-index: 91000;
          display: none;
          list-style: none;
        }

        .sub-menu li {
          border-bottom: 1px solid #f0f0f0;
        }

        .sub-menu a:hover {
          color: #fff;
          background: #830d0d;
        }

        .sub-menu a {
          color: #444;
          width: auto;
          display: block;
          text-align: left;
          padding: 11px 4px 10px 19px;
          font-size: 13px;
          font-weight: 600;
          line-height: 24px;
          transition: all .15s ease-in-out;
        }

        .nav-link:hover .sub-menu {
          display: block;
          visibility: visible;
        }

        .sub-menu li:last-of-type {
          border-bottom: 0px;
        }
      `}</style>
    </div>
  </div>
)
