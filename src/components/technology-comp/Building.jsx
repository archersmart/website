import React from 'react';
import TweenOne from 'rc-tween-one';

let dataArray = [
  [
    <rect id="Rectangle-13" x="484" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="396" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="418" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="440" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" x="462" y="0" width="20" height="20" />,
  ],
  [
    <rect id="Rectangle-13" opacity="0.15" x="506" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="528" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.1" x="0" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.15" x="22" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.2" x="44" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="66" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.25" x="88" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="110" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="132" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="154" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="176" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="198" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="220" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="242" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="264" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.4" x="286" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="308" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.35" x="330" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="352" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="374" y="0" width="20" height="20" />,
    <rect id="Rectangle-13" opacity="0.3" x="396" y="0" width="20" height="20" />,
  ],
];
function setTweenOne(item, i) {
  if (Math.random() <= 0.8) {
    return (
      <TweenOne component="g" key={i.toString()}>
        {item}
      </TweenOne>
    );
  }
  return React.cloneElement(item, { key: i.toString() });
}
dataArray = dataArray.map(item => item.map(setTweenOne));
export default class Building extends React.PureComponent {
  setAnimToTweenOne = (hover) => {
    const setAnim = (item) => {
      if (item.type.isTweenOne) {
        return React.cloneElement(item, {
          animation: hover ?
            {
              opacity: Math.random() * 0.5,
              yoyo: true,
              repeat: -1,
              duration: Math.random() * 2000 + 1000,
              delay: Math.random() * 300,
            } :
            { opacity: 1 },
        });
      }
      return item;
    };
    return dataArray.map(item => item.map(setAnim));
  }
  render() {
    const { hover, isMobile } = this.props;
    if (isMobile) {
      return <img src="https://gw.alipayobjects.com/zos/rmsportal/QerApYYMoRquqsSEbxeH.svg" alt="img" />;
    }
    const children = this.setAnimToTweenOne(hover);
    return (
      <svg width="796px" height="282px" viewBox="0 0 796 282" preserveAspectRatio="xMaxYMax slice">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-7" transform="translate(126.000000, 84.000000)">
            <rect id="Rectangle-13" fill="#13C2C2" x="66" y="44.5" width="20" height="1.5" />
          </g>
        </g>
      </svg>
    );
  }
}