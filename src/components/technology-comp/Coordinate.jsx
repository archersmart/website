import React from 'react';
import TweenOne from 'rc-tween-one';

const rectArray = [
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="100" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="40" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.5" x="160" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="240" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="260" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="120" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.5" x="140" y="22" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="80" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="100" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="40" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="60" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="20" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="220" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.7" x="160" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.6" x="180" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="280" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="240" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.7" x="140" y="42" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="80" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="60" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="0" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.15" x="20" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="200" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="220" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.8" x="160" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.6" x="180" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.05" x="300" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="240" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.6" x="120" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.8" x="140" y="62" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="40" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="200" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="220" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.7" x="160" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.6" x="180" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="120" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.7" x="140" y="82" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="220" y="102" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.5" x="160" y="102" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="120" y="102" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="100" y="122" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="200" y="122" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="180" y="122" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="240" y="122" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="120" y="122" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="220" y="2" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.5" x="160" y="2" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="180" y="2" width="18" height="18" />,
  <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="120" y="2" width="18" height="18" />,
  <g id="Group-47" transform="translate(120.000000, 40.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.6" x="0" y="2" width="18" height="18" />
    <rect id="Rectangle-10" fill="#EB2F96" opacity="0.9" x="0" y="0.5" width="18" height="1.5" />
  </g>,
  <g id="Group-46" transform="translate(40.000000, 60.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="0" y="2" width="18" height="18" />
    <rect id="Rectangle-10" fill="#FFFFFF" opacity="0.3" x="0" y="0.5" width="18" height="1.5" />
  </g>,
  <g id="Group-48" transform="translate(180.000000, 20.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="0" y="2" width="18" height="18" />
    <rect id="Rectangle-10" fill="#FFFFFF" opacity="0.3" x="0" y="0.5" width="18" height="1.5" />
  </g>,
  <g id="Group-53" transform="translate(80.000000, 0.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.3" x="0" y="2" width="18" height="18" />
    <rect id="Rectangle-10" fill="#FFFFFF" opacity="0.2" x="0" y="0.5" width="18" height="1.5" />
  </g>,
  <g id="Group-51" transform="translate(60.000000, 122.000000)" opacity="0.2">
    <rect id="Rectangle-6" fill="#1890FF" x="0" y="0" width="18" height="18" />
    <rect id="Rectangle-10" fill="#FFFFFF" x="0" y="18" width="18" height="1.5" />
  </g>,
  <g id="Group-52" transform="translate(260.000000, 42.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.2" x="0" y="0" width="18" height="18" />
    <rect id="Rectangle-10" fill="#FFFFFF" opacity="0.4" x="0" y="17.5" width="18" height="1.5" />
  </g>,
  <g id="Group-50" transform="translate(140.000000, 102.000000)" opacity="0.3">
    <rect id="Rectangle-6" fill="#1890FF" x="0" y="0" width="18" height="18" />
    <rect id="Rectangle-10" fill="#FFFFFF" x="0" y="18" width="18" height="1.5" />
  </g>,
  <g id="Group-45" transform="translate(100.000000, 62.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="0" y="0" width="18" height="18" />
    <rect id="Rectangle-10" fill="#A23AFF" opacity="0.9" x="0" y="18" width="18" height="1.5" />
  </g>,
  <g id="Group-49" transform="translate(200.000000, 42.000000)">
    <rect id="Rectangle-6" fill="#1890FF" opacity="0.4" x="0" y="0" width="18" height="18" />
    <rect id="Rectangle-10" fill="#26ADFF" x="0" y="18" width="18" height="1.5" />
  </g>,
];

export default class Coordinate extends React.PureComponent {
  getRect = hover => (rectArray.map((item, i) => (
    <TweenOne
      key={i.toString()}
      component="g"
      animation={
        hover ?
          {
            opacity: Math.random() * 0.5,
            yoyo: true,
            repeat: -1,
            duration: Math.random() * 2000 + 1000,
            delay: Math.random() * 300,
          } :
          { opacity: 1 }
      }
    >
      {item}
    </TweenOne>
  )))
  render() {
    const { hover } = this.props;
    return (
      <svg width="318px" height="142px" viewBox="0 0 318 142">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group-44" >
            {this.getRect(hover)}
          </g>
          <TweenOne
            component="g"
            animation={hover ?
              [{ x: -42 }, { y: -32 }, { x: 42 }, { y: 28 }, { x: 0 }, { y: 0 }] :
              [{ x: 0 }, { y: 0 }]}
          >
            <g id="Group-42" transform="translate(141.000000, 41.000000)">
              <rect id="Rectangle-9" fill="#1890FF" opacity="0.6" x="1" y="14" width="34" height="34" />
              <rect id="Rectangle-9" stroke="#FFFFFF" opacity="0.4" x="15.5" y="27.5" width="5" height="5" />
              <path d="M18,30.7327586 L18,0.267241379" id="Line" stroke="#FFFFFF" opacity="0.5" strokeLinecap="square" />
            </g>
          </TweenOne>
        </g>
      </svg>
    );
  }
}