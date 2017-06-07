const emailSignupForm = ({ socialMedias }) => (
  <div>
    <h3>newsletter</h3>
    <div id="mc_embed_signup">
      <form action="//traineffective.us2.list-manage.com/subscribe/post?u=e30ec16cf17bca3a08a3095cf&amp;id=23ea84b257" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="subscribe-iframe" noValidate >
        <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="your email here..." />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response"></div>
              <div className="response" id="mce-success-response"></div>
            </div>
            <div aria-hidden="true" className='hidden'><input type="text" name="b_e30ec16cf17bca3a08a3095cf_23ea84b257" tabIndex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
        </div>
      </form>
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

      .email {
        border: 2px solid #e1e1e1;
        min-height: 40px;
        width: 99%;
        padding: 6px 4px;
        color: #888;
        border-radius: 1px;
        min-width: 210px;
        display: block;
        outline: none;
        padding-left: 15px;
        margin-bottom: 20px;
      }

      .button {
        font-size: 10px;
        width: 80px;
        float: left;
        height: 40px;
        padding: 10px;
        background: #f5f5f5;
        color: #292929;
        font-weight: bold;
        border: 2px solid #e1e1e1;
        margin-left: -2px;
        font-family: "Open Sans", Helvetica, Arial, sans-serif;
        cursor: pointer;
        border-radius: 1px;
        text-transform: uppercase;
        transition: all 0.28s ease;
      }

      .button:hover {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2) inset;
      }

      .hidden {
        position: absolute;
        left: -5000px;
      }

      .response {
        display: none;
      }`}
    </style>
  </div>
)

export default emailSignupForm
