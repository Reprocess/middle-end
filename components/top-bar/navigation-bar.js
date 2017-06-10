import React from 'react';
import Link from 'next/link';

const NavigationBar = ({}) => (
  <div className="top-bar_container-left">
    <Link
      prefetch
      href="/"
      >
      <a>home</a>
    </Link>
    <Link
      prefetch
      href="http://www.traineffective.com/dashboard"
      >
      <a>login</a>
    </Link>
    <Link
      prefetch
      href="/about-us"
      >
      <a>about us</a>
    </Link>
    <Link
      prefetch
      href="/affiliate"
      >
      <a>affiliate</a>
    </Link>
    <style jsx>{`
      .top-bar_container-left {
        font-size: 11px;
        line-height: 36px;
        color: #e9e9e9;
        float: left;
        font-family: 'Titillium Web';
        font-weight: 800;
        letter-spacing: 0.6px;
        padding: 4px 0 0 4px;
        text-transform: uppercase;
        text-decoration: none;
        padding-left: 10px;
      }

      .top-bar_container-left a:visited {
        color: inherit;
        text-decoration: none;
      }

      .top-bar_container-left a:hover {
        color: #ff6c6d;
      }

      .top-bar_container-left a:after {
        content: "|";
        padding-left: 10px;
        color: #666;
        font-size: 10px;
        font-weight: 800;
      }

      .top-bar_container-left a:last-child:after {
        content: "";
      }

      .top-bar_container-left a {
        text-decoration: none;
        margin: 0 6px;
        color: #e9e9e9;
      }
    `}</style>
  </div>
)

export default NavigationBar;