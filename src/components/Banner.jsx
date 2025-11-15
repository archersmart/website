import 'rc-banner-anim/assets/index.css';
import React from 'react';
import QueueAnim from 'rc-queue-anim';
import BannerAnim from 'rc-banner-anim';
import { Button } from 'antd';

const { Element } = BannerAnim;
const { BgElement } = Element;

class Banner extends React.PureComponent {
  getDuration = (e) => {
    if (e.key === 'map') {
      return 800;
    }
    return 1000;
  };
  render() {
    const { isMobile, logo, slogan } = this.props;
    
    return (
      <div className="banner page-wrapper" >
        <div className="page">
          <div className="logo" >
            {logo}
          </div>
        </div>
        <h2 className="slogan">
          {slogan}
        </h2>
        <div className="top-wrap-background" />
      </div>
    );
  }
}

export default Banner;
