const emailSignupForm = ({ socialMedias }) => (
    <div>
        <div id="mc_embed_signup">
            <form action="//traineffective.us2.list-manage.com/subscribe/post?u=e30ec16cf17bca3a08a3095cf&amp;id=23ea84b257" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="subscribe-iframe" noValidate >
                <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">Email Address </label>
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
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
