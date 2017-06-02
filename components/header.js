import Nav from './nav'
import Logo from './logo'
import Link from 'next/link'

export default () => (
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
      <nav>
          <Link
            prefetch
            href="/"
            >
            <div className="home">
              <a>home</a>
            </div>
          </Link>
        
          <Link
            prefetch
            href="/"
            >
            <div className="blog">
              <a>blog</a>
            </div>
          </Link>
        
          <Link
            prefetch
            href="/"
            >
            <div className="categories">
              <a>categories</a>
            </div>
          </Link>
      
        <Link
          prefetch
          href="/"
          >
            <div className="about-us">
              <a>about us</a>
            </div>
        </Link>
      
        <Link
          prefetch
          href="/"
          >
            <div className="contact">
              <a>contact</a>
            </div>
        </Link>
      </nav>
      <style jsx>{`
        .nav-container {
          padding: 0 16px;
          width: 100%;
          box-sizing: border-box;
          border-right: 0!important;
        }

        .nav-container:hover {
          background-color: inherit!important;
        }

        nav:after {
          content: "";
          display: table;
          clear: both;
        }

        nav {
          width: 100%;
          border-top: 1px solid #6d0909;
          border-bottom: 4px solid #6d0909;
          background-color: #830d0d;
        }

        a {
          padding: 0 10px;
          font-size: 15px;
          line-height: 45px;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          text-decoration: none;
          color: #fff;
        }

        div {
          border-right: 1px solid #6d0909;
          width: 20%;
          box-sizing: border-box;
          float: left;
          text-align: center;
          transition: all .15s ease-in-out;
          cursor: pointer;
        }

        div:hover {
          background-color: #6d0909;
        }

        .home { width: 16.2%; border-left: 1px solid #6d0909}
        .blog { width: 14.4%; }
        .categories { width: 26.15%; }
        .about-us { width: 22.4%; }
        .contact { width: 20.85%; }

      `}</style>
    </div>
  </div>
)
