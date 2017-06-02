import React from 'react';
import Link from 'next/link';

const SocialBar = ({}) => (
  <div className="top-bar_container-right">
    <Link
      prefetch
      href="https://facebook.com/TrainEffective/"
      >
      <a target="_blank"><i className="fa fa-facebook"></i></a>
    </Link>
    <Link
      prefetch
      href="https://twitter.com/traineffective"
      >
      <a target="_blank"><i className="fa fa-twitter"></i></a>
    </Link>
    <Link
      prefetch
      href="https://www.youtube.com/channel/UC3nktOSPYbgme-dxC7q585w"
      >
      <a target="_blank"><i className="fa fa-youtube"></i></a>
    </Link>
    <Link
      prefetch
      href="https://www.linkedin.com/company-beta/17949402/"
      >
      <a target="_blank"><i className="fa fa-linkedin"></i></a>
    </Link>
    <Link
      prefetch
      href="https://instagram.com/traineffective"
      >
      <a target="_blank"><i className="fa fa-instagram"></i></a>
    </Link>
    <style jsx>{`
      .top-bar_container-right {
        height: 46px;
        float: right;
        margin-right: 10px;
      }

      .fa {
        -webkit-transition: all 0.25s ease;
        -moz-transition: all 0.25s ease;
        -ms-transition: all 0.125s ease;
        -o-transition: all 0.25s ease;
        transition: all 0.25s ease;
        font-size: 18px;
        color: #d9d9d9;
        padding: 13px 14px;
        height: 100%;
        cursor: pointer;
      }

      .fa-facebook:hover {
        background-color: #3b5996;
      }

      .fa-twitter:hover {
        background-color: #00acee;
      }

      .fa-youtube:hover {
        background-color: #cb322c;
      }

      .fa-linkedin:hover {
        background-color: #0073b2;
      }

      .fa-instagram:hover {
        background-color: #457399;
      }
    `}</style>
  </div>
)

export default SocialBar;