import Link from 'next/link'

export default () => (
  <div className="logo-container">
    <img
      src="http://www.traineffective.com/wp-content/themes/Effective/images/effective_logo2.png"
      alt="logo"
      />
    <div className="blog-logo">
      <Link
        prefetch
        href="/"
        >
        <a><i className="fa fa-chevron-right"></i>BLOG</a>
      </Link>
    </div>
    <style jsx>{`
      .logo-container {
        padding-left: 15px;
      }

      img {
        width: 144px;
        float: left;
        margin-left: 2px;
        margin-right: 6px;
      }

      a {
        height: 21px;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 104px;
        font-size: 24px;
        color: #830d0d;
        font-weight: 600;
        text-decoration: none;
        line-height: 92px;
      }

      .fa {
        top: 0px;
        margin-right: 15px;
        margin-left: 15px;
        color: #dadee4;
        font-size: 20px;
        font-family: FontAwesome;
        position: relative;
        right: -2px;
        font-weight: 600;
      }

      .blog-logo {
        float: left;
      }

      @media (max-width: 1200px) {
        .logo-container {
          padding-left: 0px;
        }
      }

      @media (max-width: 960px) {
        .logo-container {
          height: 45px;
        }

        img {
          max-height: 48px;
          width: auto;
          padding-left: 10px;
        }

        .blog-logo a {
          line-height: 48px;
        }
      }
    `}</style>
  </div>
)
