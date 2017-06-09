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
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'popular',
		};

		this.handleClickOnTab = this.handleClickOnTab.bind(this);
	}

	handleClickOnTab(selectedTab) {
		if (this.state.selectedTab != selectedTab)
			this.setState({ selectedTab });
	}

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

		const { articles, categories, popularityArticles, comments, lastArticles } = this.props;
		const { selectedTab } = this.state;

		return (
			<div className="sidebar">
				<FreeTrainingAd />
				<LatestPostsList articles={lastArticles} />
				<CategoriesList categories={categories} />
				<PopularAndComments
					articles={popularityArticles}
					comments={comments}
					selectedTab={selectedTab}
					handleClickOnTab={this.handleClickOnTab}
					/>
				<FacebookPageBox />
				<SocialButtons
					socialMedias={socialMedias}
					/>
				<EmailSignupForm />
				<iframe name="subscribe-iframe" className="email-subscribe-iframe" />
				<style jsx>{`
					.sidebar {
						width: 300px;
						margin-left: 25px;
						float:right;
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
