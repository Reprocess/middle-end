import uuidV4 from 'uuid/v4'

const SocialButtons = ({ socialMedias }) => (
  <div>
    <h3>FOLLOW US</h3>
    <div className="social-medias-container">
      {socialMedias.map((socialMedia) => (
        <div className="social-media-link">
          <a
            href={socialMedia.link}
            target="_blank"
            key={uuidV4()}
            className={`socicon socicon-${socialMedia.title.toLowerCase()}`}
            >
          </a>
        </div>
      ))}
    </div>
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

      .social-medias-container {
        margin-bottom: 35px;
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
    `}</style>
  </div>
)

export default SocialButtons

SocialButtons.propTypes = {
  socialMedias: React.PropTypes.array.isRequired
}
