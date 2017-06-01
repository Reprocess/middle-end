import React, {PropTypes, Component} from 'react';
import uuidV4 from 'uuid/v4'
import CategoriesList from './categories';
import LatestPostsList from './latest-posts';
import SocialButtons from './social-buttons';
import EmailSignupForm from './email-signup-form';
import PopularAndComments from './popular-and-comments';
import FacebookPageBox from './facebook-page-box';
import FreeTrainingAd from './free-training-ad';

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

        const { articles, categories, popularityArticles } = this.props;

        return (
            <div className="sidebar">
                <FreeTrainingAd />
                <LatestPostsList articles={popularityArticles} />
                <CategoriesList categories={categories} />
                <PopularAndComments articles={articles} />
                <FacebookPageBox />
                <SocialButtons
                    socialMedias={socialMedias}
                />
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
