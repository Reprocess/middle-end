import React, {PropTypes, Component} from 'react'
import moment from 'moment'
import uuidV4 from 'uuid/v4'

class Sidebar extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { comments } = this.props;

    return (
        <div
          className="comments-list"
          >
          {comments.map((comment) => (
            <div>
              <h6>{comment.name} | {moment(comment.date).fromNow()}</h6>
              <h5>{comment.comment}</h5>

            </div>
          ))}
          <style jsx>{`
              
          `}</style>
        </div>
    )
  }
}

export default Sidebar

Sidebar.propTypes = {
}