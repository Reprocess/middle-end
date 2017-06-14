import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" id="ls-google-fonts-css" href="http://fonts.googleapis.com/css?family=Lato:100,300,regular,700,900%7COpen+Sans:300%7CIndie+Flower:regular%7COswald:300,regular,700&amp;subset=latin" type="text/css" media="all" />
      <link href="https://fonts.googleapis.com/css?family=Roboto|Lora|Open+Sans|Abril+Fatface|Titillium+Web" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://d1azc1qln24ryf.cloudfront.net/114779/Socicon/style-cf.css?cp0z2c" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body {
        font-family: "Titillium Web", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        background-color: #ffffff;
        -webkit-font-smoothing: antialiased;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /* loading progress bar styles */
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: #ff9300;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px #ff9300, 0 0 5px #ff9300;
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
      }
      .md-editor-toolbar {
        display: none;
      }
    `}</style>
  </div>
)
