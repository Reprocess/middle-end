import React, { Component } from 'react'
import Nav from './nav'
import Logo from './logo'
import Link from 'next/link'
import uuidV4 from 'uuid/v4'

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpened: false,
      isSubMenuOpened: false,
    };
  }

  handleMenuClick() {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened,
    });
  }

  handleSubMenuClick() {
    this.setState({
      isSubMenuOpened: !this.state.isSubMenuOpened,
    });
  }

  render() {
    const { categories } = this.props;
    const { isMenuOpened, isSubMenuOpened } = this.state;

    return (
      <div>
        <header className="float-fix">
          <div className="left">
            <span className="logo">
              <Logo />
            </span>
          </div>
          <div className="right">
            <div className="learn-more-container">
              <Link
                prefetch
                href="http://traineffective.com"
                >
                <a className="learn-more-a">Learn More About TrainEffective</a>
              </Link>
            </div>
            <div className="menu-container">
              <i className={ isMenuOpened ? "fa fa-times" : "fa fa-bars" } onClick={() => this.handleMenuClick()}></i>
              { isMenuOpened ?
              <ul className="menu">
                <Link
                  prefetch
                  href="http://traineffective.com"
                  >
                  <li className="menu-nav-link">
                    <a className="menu-nav-a">home</a>
                  </li>
                </Link>
                <Link
                  prefetch
                  href="/"
                  >
                  <li className="menu-nav-link">
                    <a className="menu-nav-a">blog</a>
                  </li>
                </Link>
                <li className={ isSubMenuOpened ? "menu-nav-link opened" : "menu-nav-link" } onClick={() => this.handleSubMenuClick()}>
                  <a className="menu-nav-a">categories</a>
                  { isSubMenuOpened ? <ul className="small-sub-menu">
                    {categories.map(category => (
                      <Link
                        key={uuidV4()}
                        prefetch
                        href="/"
                        >
                        <li className="small-sub-menu-link">
                          <a className="small-sub-menu-a">{category}</a>
                        </li>
                      </Link>
                    ))}
                  </ul>
                : <span /> }
                </li>
                <Link
                  prefetch
                  href="/about-us"
                  >
                  <li className="menu-nav-link">
                    <a className="menu-nav-a">about us</a>
                  </li>
                </Link>
                <li className="menu-nav-link">
                  <a className="menu-nav-a" target="_blank" href="http://traineffective.com/contact">contact</a>
                </li>
              </ul>
              : <div /> }
            </div>
          </div>

          <style jsx>{`
            a {
              color: inherit;
              text-decoration: none;
            }
            .float-fix:after {
              content: "";
              display: table;
              clear: both;
            }

            header {
              font-size: 14px;
              padding-bottom: 18px;
            }

            .logo {
              margin: 0;
              display: block;
            }

            .left {
              max-width: 50%;
              float: left;
            }

            .right {
              float: right;
            }

            .learn-more-a {
              text-decoration: none;
              color: white;
              font-size: 19px;
              font-weight: 500;
              background-color: #830d0d;
              padding: 14px 0;
              min-width: 366px;
              display: inline-block;
              text-align: center;
              line-height: 16px;
              border-radius: 40px;
              -webkit-transition: all 0.9s;
              transition: all 0.9s;
              border: 3px solid transparent;
              height: 50px;
              margin: 20px 13px 21px 0;
            }

            .learn-more-a:hover {
              color: #830d0d!important;
              background: #fff;
              border: 3px solid #830d0d;
            }

            .menu-container {
              display: none;
              margin: 5px 4px 0 0;
              font-size: 28px;
              color: #830d0d;
              cursor: pointer;
              position: relative;
            }

            .menu {
              width: 300px;
              right: -5px;
              left: auto;
              border: 3px solid #830d0d;
              top: 62px;
              position: absolute;
              background: #fff;
            }

            .menu-nav-link {
              display: block;
              clear: both;
              border-bottom: 1px solid #6d0909;
              vertical-align: middle;
              list-style: none;
              font-size: 14px;
              color: #666;
              padding: 15px 11px 14px 10px;
              text-transform: uppercase;
              line-height: 1.2;
              font-weight: 700;
            }

            .opened {
              background: #6d0909;
              color: #fff;
            }
            
            .small-sub-menu {
              margin-left: -2px;
              border: 4px solid #6d0909;
              background: #fff;
              font-size: 90%;
              margin-top: 10px;
            }
            
            .small-sub-menu li {
              margin-left: 10px;
              border-bottom: 1px solid #dcdee2;
              font-size: 13px;
              line-height: 1.2;
              padding: 15px 11px 14px 0;
              list-style: none;
              color: #444;
              text-transform: none;
              margin-right: 10px;
            }

            @media (max-width: 960px) {
              .learn-more-container {
                display: none;
              }

              .menu-container {
                display: block;
              }
              
              header {
                border-bottom: 1px solid #f0f0f0;
              }
            }

            @media (max-width: 767px) {
              .left {
                max-width: 80%;
              }
            }
          `}</style>
        </header>
        <div className="nav-container">
          <ul className="nav">
            <Link
              prefetch
              href="http://traineffective.com"
              >
              <li className="nav-link">
                <a className="nav-a">home</a>
              </li>
            </Link>
            <Link
              prefetch
              href="/"
              >
              <li className="nav-link">
                <a className="nav-a">blog</a>
              </li>
            </Link>
            <Link
              prefetch
              href="/"
              >
              <li className="nav-link">
                <a className="nav-a">categories</a>
                <ul className="sub-menu">
                  {categories.map(category => (
                    <Link
                      key={uuidV4()}
                      prefetch
                      href="/"
                      >
                      <li className="sub-menu-link">
                        <a className="sub-menu-a">{category}</a>
                      </li>
                    </Link>
                  ))}
                </ul>
              </li>
            </Link>
            <Link
              prefetch
              href="/about-us"
              >
              <li className="nav-link">
                <a className="nav-a">about us</a>
              </li>
            </Link>
            <li className="nav-link">
              <a className="nav-a" href="http://traineffective.com/contact">contact</a>
            </li>
            
          </ul>
          <style jsx>{`
            .nav-container {
              padding: 0 16px;
              width: 100%;
              box-sizing: border-box;
              height: 50px;
            }

            .nav {
              background-color: #830d0d;
              border-bottom: 4px solid #6d0909;
              border-top: 1px solid #6d0909;
              display: table;
              float: left;
              width: 100%;
              list-style: inside;
              margin: 0;
              padding: 0;
              font-size: 100%;
              vertical-align: baseline;
              height: 100%;
            }

            .nav-link:first-of-type {
              border-left: 1px solid #6d0909;
            }

            .nav-link {
              border-right: 1px solid #6d0909;
              list-style: none;
              margin: 0;
              padding: 0;
              vertical-align: middle;
              display: table-cell;
              float: none;
              cursor: pointer;
              text-align: center;
              transition: all .15s ease-in-out;
            }

            .nav-link:hover {
              background-color: #6d0909;
            }

            .nav-a {
              text-decoration: none;
              color: #fff;
              margin: 0;
              padding: 0 10px;
              font-size: 15px;
              line-height: 45px;
              font-weight: bold;
              text-transform: uppercase;
            }

            .sub-menu {
              margin-left: -2;
              border: 4px solid #6d0909;
              width: 212px;
              position: absolute;
              background: #fff;
              margin: 0;
              z-index: 91000;
              display: none;
              list-style: none;
            }

            .sub-menu li {
              border-bottom: 1px solid #f0f0f0;
            }

            .sub-menu a:hover {
              color: #fff;
              background: #830d0d;
            }

            .sub-menu a {
              color: #444;
              width: auto;
              display: block;
              text-align: left;
              padding: 11px 4px 10px 19px;
              font-size: 13px;
              font-weight: 600;
              line-height: 24px;
              transition: all .15s ease-in-out;
            }

            .nav-link:hover .sub-menu {
              display: block;
              visibility: visible;
            }

            .sub-menu li:last-of-type {
              border-bottom: 0px;
            }

            @media (max-width: 1200px) {
              .nav-container {
                padding: 0;
              }
            }

            @media (max-width: 960px) {
              .nav-container {
                display: none;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
}
