import React from 'react';
import NavigationBar from './navigation-bar';
import SocialBar from './social-bar';

const TopBar = ({}) => (
  <div>
    <div className="top-bar">
      <div className="top-bar_container">
        <NavigationBar/>
        <SocialBar/>
      </div>
    </div>
    <style jsx> {`
      .top-bar {
        background-color: black;
        height: 46px;
      }

      .top-bar_container {
        width: 1100px;
        margin: auto;
      }
    `}</style>
  </div>
);

export default TopBar;