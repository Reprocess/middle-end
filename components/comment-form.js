import React, {PropTypes, Component} from 'react';
import RESPONSE_FROM from '../firebase/database';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      emailValue: '',
      nameValue: '',
      commentValue: '',
      websiteValue: '',
    }
  }
  
  onSubmit(event) {
    event.preventDefault();

    const { emailValue, nameValue, commentValue, websiteValue } = this.state;
    const { id } = this.props;

    console.log(RESPONSE_FROM);

    const response = RESPONSE_FROM
                 .child('comments')
                 .child(id)
                 .push();

    console.log(response);

    response.set({
      email: emailValue,
      name: nameValue,
      comment: commentValue,
      website: websiteValue,
      date: Date.now(),
    }).then(() => {
      window.location.reload();
    });

    console.log(response);
  }

  onChange(type, value) {
    switch(type) {
      case 'email': {
        this.setState({
          emailValue: value,
        });
        break;
      }
      case 'name': {
        this.setState({
          nameValue: value,
        });
        break;
      }
      case 'comment': {
        this.setState({
          commentValue: value,
        });
        break;
      }
      case 'website': {
        this.setState({
          websiteValue: value,
        });
        break;
      }
    }
  }

  render() {

    const { id } = this.props;
    const { emailValue, nameValue, commentValue, websiteValue} = this.state;
    let email, name, comment, website;

    return (
        <div
          className="comment-form"
          >
          <form
            onSubmit={(event) => this.onSubmit(event)} >
            <textarea 
              placeholder="comment"
              ref={c => (comment = c)}
              value={commentValue}
              onChange={() => this.onChange('comment', comment.value)}
              />
            <br />
            <input
              type="email"
              placeholder="email"
              ref={c => (email = c)}
              value={emailValue}
              onChange={() => this.onChange('email', email.value)}
              />
            <br />
            <input
              type="text"
              placeholder="name"
              ref={c => (name = c)}
              value={nameValue}
              onChange={() => this.onChange('name', name.value)}
              />
            <br />
            <input
              type="text"
              placeholder="website"
              ref={c => (website = c)}
              value={websiteValue}
              onChange={() => this.onChange('website', website.value)}
              />
            <br />
            <input
              type="submit"
              />
            <style jsx>{`
                
            `}</style>
          </form>
        </div>
    )
  }
}

export default Sidebar

Sidebar.propTypes = {
}
