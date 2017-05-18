import uuidV4 from 'uuid/v4'

const SocialButtons = ({ socialMedias }) => (
    <div>
        {socialMedias.map((socialMedia) => (
            <a href={socialMedia.link} target="_blank" key={uuidV4()}>{socialMedia.title}<br /></a>
        ))}
    </div>
)

export default SocialButtons

SocialButtons.propTypes = {
    socialMedias: React.PropTypes.array.isRequired
}