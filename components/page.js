import Header from './header'
import Meta from './meta'
import Footer from './footer'
import TopBar from './top-bar'

const Page =  ({ children }) => (
  <div className="page-wrapper">
    <Meta />
    <TopBar/>
    <div className="main">
      <Header />

      <div className="page">
        { children }
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

        @media (max-width: 750px) {
          .main {
            padding: 0;
            width: auto;
          }
        }
      `}</style>
    </div>
  </div>
);

Page.propTypes = {
    children: React.PropTypes.node.isRequired
}

export default Page
