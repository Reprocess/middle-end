import React, {PropTypes, Component} from 'react';
import Link from 'next/prefetch'
import uuidV4 from 'uuid/v4'
import CategoriesList from './categories';
import LatestPostsList from './latest-posts';
import SocialButtons from './social-buttons';
import EmailSignupForm from './email-signup-form';
import PopularAndComments from './popular-and-comments';

class Sidebar extends Component {
    render() {
        const socialMedias = [
            {
                title: 'Facebook',
                link: 'https://facebook.com/traineffective'
            },
            {
                title: 'YouTube',
                link: 'https://youtube.com/traineffective'
            },
            {
                title: 'Instagram',
                link: 'https://instagram.com/traineffective'
            },
            {
                title: 'Twitter',
                link: 'https://twitter.com/traineffective'
            },
            {
                title: 'Snapchat',
                link: 'https://snapchat.com/add/traineffective'
            }
        ]

        const { articles, categories } = this.props;

        return (
            <div className="sidebar">
                <div className="sidebar-free-training-ad">
                    <a href="https://traineffective.leadpages.co/leadbox/141667573f72a2%3A13ce14a42f46dc/5766466041282560/">
                        <img src="https://lh3.googleusercontent.com/G4Nm3K_TRBoKxTZmOSnnzFf7SGNgyiOZ_P31bYIwMgQvURoH9LpxwwifmvugND27wpBH8rbASHptDB3nS1bF4w=s0" alt="Advertisement" className="free-training-ad-photo"/>
                    </a>
                </div>
                <div>
                    <h3>LATEST POSTS</h3>
                    <LatestPostsList articles={articles} />
                </div>
                <CategoriesList categories={categories} />
                <PopularAndComments articles={articles} />
                <iframe name="f141e64e7ed674" width="1000px" height="1000px" frameBorder="0" allowTransparency="true" allowFullScreen="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="https://www.facebook.com/v2.0/plugins/like_box.php?app_id=283742071785556&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F_dMxoUH0Bax.js%3Fversion%3D42%23cb%3Df15eb8b5e7a3dcc%26domain%3Dblog.traineffective.com%26origin%3Dhttp%253A%252F%252Fblog.traineffective.com%252Ff11e7f4715d562c%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=300&amp;header=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FTrainEffective%2F&amp;locale=en_US&amp;sdk=joey&amp;show_border=false&amp;show_faces=true&amp;stream=false"></iframe>
                <div>
                    <h3>FOLLOW US</h3>
                    <SocialButtons
                        socialMedias={socialMedias}
                    />
                </div>
                <EmailSignupForm />
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
                `}</style>
            </div>
        )
    }
}

export default Sidebar

Sidebar.propTypes = {
  categories: React.PropTypes.array.isRequired,
  latestPosts: React.PropTypes.array,
}
