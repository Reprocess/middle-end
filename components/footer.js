import Link from 'next/link';
import uuidV4 from 'uuid/v4';
import base64 from 'base-64';

export default () => (
  <footer>
    <div className="footer">
      <div className="left">
        <div>
          <h5 className="title">about us</h5>
          <div>
            <p>Effective empowers youth to achieve their full potential.</p>
            <p>We inspire our youth and their communities through the medium of sport, using the greats of sport to educate them through the core principles of success and achievement.</p>
            <p>With expert content providers from teams in the English Premiership League & The Football Association, our first of its kind e-learning community transforms youth from over 45 countries into believers of themselves and trusters of “the process”, resulting in an unshakeable confidence to take on any challenge, forever.</p>
            <p>Join our mission to make the world a more empowered place than ever before.</p>
          </div>
        </div>
        <div>
          <h5 className="title">follow us</h5>
          <ul>
            <li className="social-media-link">
              <a
                href="https://facebook.com/TrainEffective/"
                target="_blank"
                className="socicon socicon-facebook"
                >
              </a>
            </li>
            <li className="social-media-link">
              <a
                href="https://twitter.com/traineffective"
                target="_blank"
                className="socicon socicon-twitter"
                >
              </a>
            </li>
            <li className="social-media-link">
              <a
                href="https://instagram.com/traineffective"
                target="_blank"
                className="socicon socicon-instagram"
                >
              </a>
            </li>
            <li className="social-media-link">
              <a
                href="https://www.youtube.com/channel/UC3nktOSPYbgme-dxC7q585w"
                target="_blank"
                className="socicon socicon-youtube"
                >
              </a>
            </li>
            <li className="social-media-link">
              <a
                href="https://www.snapchat.com/add/traineffective"
                target="_blank"
                className="socicon socicon-snapchat"
                >
              </a>
            </li>
            <li className="social-media-link">
              <a
                href="https://vine.co/effective"
                target="_blank"
                className="socicon socicon-vine"
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footbot">
      <div className="footbot-container">
        <div className="left">
          <div className="footer-copyright">©2017 Effective - All Rights Reserved</div>
        </div>
        <div className="right">
          <div className="footer-navi">
            <Link
              prefetch
              href="https://www.traineffective.com/"
              >
              <a>Home</a>
            </Link>
            | 
            <Link
              prefetch
              href="http://www.traineffective.com/dashboard"
              >
              <a>Login</a>
            </Link>
            | 
            <Link
              prefetch
              href="/about-us"
              >
              <a>About</a>
            </Link>
            | 
            <Link
              prefetch
              href="/affiliate"
              >
              <a>Affilliate</a>
            </Link>
            | 
            <Link
              prefetch
              href="http://www.traineffective.com/terms-of-service/"
              >
              <a>Privacy Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      footer {
        width: 100%;
        background: #101012;
        padding-top: 50px;
        text-align: left;
      }

      .footer {
        width: 1130px;
        padding: 0 15px 50px 15px;
        margin: auto;
      }
      
      .footer:after {
        content: "";
        display: table;
        clear: both;
      }

      .left {
        float: left;
        width: 50%;
        box-sizing: border-box;
        padding: 0 15px;
      }

      .right {
        float: right;
        width: 50%
        box-sizing: border-box;
        padding: 0 15px;
      }

      .about-us-box {
        text-align: left;
        font-size: 13px;
        font-weight: normal;
        clear: both;
      }

      .title {
        color: #fff;
        display: block;
        padding-bottom: 6px;
        font-size: 15px;
        letter-spacing: 0.6px;
        text-transform: uppercase;
        line-height: 1.5;
        font-weight: 800;
        text-shadow: 0 1px 0 #000;
      }

      p {
        line-height: 19px;
        color: #a9a9a9;
        word-wrap: break-word;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.5px;
        margin: 0 0 20px 0;
      }

      ul {
        margin-bottom: 10px;
        margin: 0;
        padding: 0;
        list-style: none;
        letter-spacing: 0;
      }

      .social-media-link {
        margin: 2px 8px 2px 2px;
        padding: 8px 4px 8px 0;
        display: inline-block;
        transition: all .07s ease;
      }

      a {
        font-size: 18px;
        padding: 10px;
        color: #fff;
        border-radius: 100px;
        text-decoration: none;
        transition: opacity .2s;
        top: 0px;
        vertical-align: middle;
        width: 1em;
        height: 1em;
        line-height: 1em;
      }

      .social-media-link:hover {
        opacity: 0.75;
      }

      .socicon-facebook {
        background-color: rgb(59, 89, 152);
      }

      .socicon-youtube {
        background-color: #dd3333;
      }

      .socicon-instagram {
        background-color: #e1306c;
      }

      .socicon-twitter {
        background-color: #33ccff;
      }

      .socicon-snapchat {
        background-color: #fffc00;
      }

      .socicon-vine {
        background-color: #00bf8f;
      }

      .tagcloud a {
        font-size: 8pt;
        padding: 7px 14px;
        background: #212121;
        margin: 3px;
        display: inline-block;
        color: #808080;
        border: none;
        transition: all 0.18s ease;
        line-height: 16px;
        font-weight: 400;
        min-width: 18px;
        border-radius: 3px;
        width: auto;
        letter-spacing: 2px;
        text-transform: uppercase;
        height: auto;
      }

      .tagcloud a:hover {
        color: #fff;
        background: #171717;
      }

      .footbot {
        width: 100%;
        background: #0a0a0b;
      }

      .footbot-container {
        padding: 26px 15px 18px 15px;
        width: 1130px;
        margin: auto;
      }

      .footbot-container:after {
        content: "";
        display: table;
        clear: both;
      }

      .footer-copyright {
        line-height: 38px;
        font-size: 12px;
        color: #393939;
        font-weight: 600;
      }

      .footer-navi {
        line-height: 38px;
        font-weight: 600;
        font-size: 12px;
        color: #393939;
      }

      .footer-navi a {
        color: #717171;
        margin: 0 7px;
        font-size: 12px;
        padding: 0;
      }

      .footer-navi a:hover {
        text-decoration: underline;
      }

      @media (max-width: 1200px) {
        .footer {
          width: 940px;
        }

        .footbot-container {
          width: 940px;
        }

        .footbot-container .left, .footbot-container .right {
          padding: 0;
        }
      }

      @media (max-width: 960px) {
        .footer {
          width: 748px;
        }

        .footer .left, .footer .right {
          width: 100%;
          padding: 0 10px;
        }

        .footbot-container {
          width: 748px;
        }
      }

      @media (max-width: 767px) {
        .footer {
          width: 420px;
        }

        .footbot-container {
          width: 420px;
        }

        .footbot .left, .footbot .right {
          float: none;
          width: 100%;
          text-align: center;
        }
      }

      @media (max-width: 479px) {
        .footer {
          width: 320px;
        }

        .footbot-container {
          width: 320px;
        }
      }
    `}</style>
  </footer>
)
