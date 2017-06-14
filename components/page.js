import Header from './header'
import Meta from './meta'
import Footer from './footer'
import TopBar from './top-bar'

const Page =  ({ categories, children }) => (
  <div className="page-wrapper">
    <Meta />
    <TopBar />
    <div className="main">
      <Header
        categories={categories}
        />

      <div className="page">
        { children }
      </div>
    </div>
    <Footer />
    <style jsx>{`
        .main {
          width: 1100px;
          margin: auto;
          padding: 20px 0 0 0;
        }

        .page {
          color: #828282;
          background: #fff;
          padding: 35px 15px 0;
          width: 100%;
        }

        .page:after {
          content: "";
          display: table;
          clear: both;
        }

        @media (max-width: 1200px) {
          .main {
            width: 920px;
          }

          .page {
            padding: 35px 0 0 0;
          }
        }

        @media (max-width: 960px) {
          .main {
            width: 748px;
          }
        }

        @media (max-width: 767px) {
          .main {
            width: 400px;
          }
        }

        @media (max-width: 479px) {
          .main {
            width: 300px;
          }
        }
      `}</style>
  </div>
);

Page.propTypes = {
    children: React.PropTypes.node.isRequired
}

export default Page
