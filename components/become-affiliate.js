import React, { Component } from 'react';
import Link from 'next/link';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      messageValue: '',
    }
  }

  handleChange(value, type) {
    switch(type) {
      case 'name': {
        this.setState({nameValue: value});
        break;
      }
      case 'email': {
        this.setState({emailValue: value});
        break;
      }
      case 'message': {
        this.setState({messageValue: value});
        break;
      }
      default: {
        break;
      }
    }
  }

  sendMail(event) {
    event.preventDefault();
    const { nameValue, emailValue, messageValue } = this.state;
    window.location.href = `mailto:marcin.polski98@gmail.com?cc=${emailValue}&subject=Becoming a TrainEffective Athlete&body=${nameValue}\n${messageValue}`;
  }

  render() {
    const { nameValue, emailValue, messageValue } = this.state;
    return (
      <div className="affiliate-container">
        <div className="headline">
          <h2>become a traineffective athlete</h2>
        </div>
        <div className="breadcrumbs-w">
          <h3>
            <Link
              href="/"
              prefetch
              >
              <a>home </a>
            </Link>
            » become a traineffective athlete</h3>
        </div>
        <div className="form-container">
          <form>
            <p>
              <label>
                Your Name (required)
                <br />
                <input
                  type="text"
                  size="40"
                  aria-required="true"
                  value={nameValue}
                  ref={(input) => (this.name = input)}
                  onChange={() => this.handleChange(this.name.value, 'name')}
                  />
              </label>
            </p>
            <p>
              <label>
                Your Email (required)
                <br />
                <input
                  type="text"
                  size="40"
                  aria-required="true"
                  value={emailValue}
                  ref={(input) => (this.email = input)}
                  onChange={() => this.handleChange(this.email.value, 'email')}
                  />
              </label>
            </p>
            <p>Subject<br />
            Becoming a TrainEffective Athlete</p>
            <p>
              <label>
                Your Message
                <br />
                <textarea
                  type="text"
                  size="40"
                  aria-required="true"
                  value={messageValue}
                  ref={(input) => (this.message = input)}
                  onChange={() => this.handleChange(this.message.value, 'message')}
                  />
              </label>
            </p>
            <p onClick={(event) => this.sendMail(event)}>
              <input
                type="submit"
                value="Send"
                className="button"
                onClick={(event) => this.sendMail(event)}
                />
            </p>
          </form>
        </div>
        <style jsx>{`
          .headline {
            width: 100%;
            padding: 14px 0;
            display: block;
            max-width: 1068px;
            margin: auto;
            border: 1px solid #e1e1e1;
            margin-top: -35px;
          }

          .headline h2 {
            font-size: 27px;
            line-height: 1.3;
            position: relative;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: -1px;
            padding-left: 30px;
            color: #000;
          }

          .breadcrumbs-w {
            background: #f9f9f9;
            padding: 10px 30px 10px 30px;
            font-size: 11px;
            color: #5c646d;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: 400;
            max-width: 1068px;
            margin: auto;
            border: 1px solid #e1e1e1;
            border-top: none;
            margin-bottom: 35px;
          }

          .breadcrumbs-w h3 {
            color: #5c646d;
            font-weigth: 400;
            font-size: 100%;
          }

          a {
            text-decoration: none;
            color: #5c646d;
          }

          a:hover {
            text-decoration: underline;
          }

          p {
            color: #72757f;
            font-size: 13px;
            margin: 0 0 20px 0;
            line-height: 1.8;
            font-weight: bold;
          }

          input {
            width: 100%;
            padding: 10px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 1px;
            color: #888;
          }

          input:hover, textarea:hover {
            border: 1px solid #5a8dd6;
          }

          input:focus, textarea:focus {
            outline: none;
          }

          textarea {
            margin: 0 auto;
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            font-size: 14px;
            border-radius: 1px;
            color: #888;
            min-height: 170px;
            resize: vertical;
          }

          .button {
            background: #54cd38;
            padding: 16px 56px;
            border-radius: 1px;
            color: #fff;
            font-size: 15px;
            font-family: 'Open Sans', Helvetica, Arial, sans-serif;
            font-weight: 600;
            cursor: pointer;
            margin-bottom: 21px;
            margin-right: 10px;
            line-height: 1;
            letter-spacing: 0;
            transition: all 0.28s ease;
            text-align: center;
            width: auto;
            border: none;
          }

          .button:hover {
            border: none;
            background-color: #74b609;
          }

        `}</style>
      </div>
    );
  }
}