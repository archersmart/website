import 'rc-banner-anim/assets/index.css';
import React from 'react';
import './style/background.less';

class Background extends React.PureComponent {
  render() {
    return (
      <div className="nav-wrap" >
        <div className="nav-background" />
      </div>
    );
  }
}

export default Background;
