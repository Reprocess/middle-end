import Link from 'next/prefetch'
import uuidV4 from 'uuid/v4'
import categories from './categories';
import latestPosts from './latest-posts';

const Sidebar = ({ categories, articles }) => (
    <div className="sidebar">
        <input />
        <div className="sidebar-free-training-ad">
            <a href="https://traineffective.leadpages.co/leadbox/141667573f72a2%3A13ce14a42f46dc/5766466041282560/">
                <img src="https://lh3.googleusercontent.com/G4Nm3K_TRBoKxTZmOSnnzFf7SGNgyiOZ_P31bYIwMgQvURoH9LpxwwifmvugND27wpBH8rbASHptDB3nS1bF4w=s0" alt="Advertisement" className="free-training-ad-photo"/>
            </a>
        </div>
        <div>
            <h3>LATEST POSTS</h3>
            <latestPosts 
            />
        </div>
        <categories />
        <iframe name="f141e64e7ed674" width="1000px" height="1000px" frameBorder="0" allowTransparency="true" allowFullScreen="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="https://www.facebook.com/v2.0/plugins/like_box.php?app_id=283742071785556&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F_dMxoUH0Bax.js%3Fversion%3D42%23cb%3Df15eb8b5e7a3dcc%26domain%3Dblog.traineffective.com%26origin%3Dhttp%253A%252F%252Fblog.traineffective.com%252Ff11e7f4715d562c%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=300&amp;header=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FTrainEffective%2F&amp;locale=en_US&amp;sdk=joey&amp;show_border=false&amp;show_faces=true&amp;stream=false"></iframe>
        <div>
            <h3>FOLLOW US</h3>
            <a href="https://facebook.com/traineffective" target="_blank"><h4>Facebook</h4></a>
            <a href="https://youtube.com/traineffective" target="_blank"><h4>YouTube</h4></a>
            <a href="https://instagram.com/traineffective" target="_blank"><h4>Instagram</h4></a>
            <a href="https://twitter.com/traineffective" target="_blank"><h4>Twitter</h4></a>
            <a href="https://snapchat.com/add/traineffective" target="_blank"><h4>Snapchat</h4></a>
        </div>
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
        <iframe name="subscribe-iframe" className="email-subscribe-iframe" />
        <style jsx>{`
            .sidebar {
                margin: 0 2.5% 0 2.5%;
                width: 20%;
                float:right;
            }

            input {
                width: 100%;
            }

            img {
                max-width: 320no na wópx;
            }

            iframe {
                border: none;
                visibility: visible;
                width: 300px;
                height: 214px;
            }

            .hidden {
                 position: absolute;
                 left: -5000px;
            }

            .response {
                display: none;
            }
        `}</style>
    </div>
)

export default Sidebar

Sidebar.propTypes = {
  categories: React.PropTypes.array.isRequired,
  latestPosts: React.PropTypes.array,
}
