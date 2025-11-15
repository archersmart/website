import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page3({ isMobile }) {
  return (
    <ScrollOverPack id="page3" className="content-wrapper product-page">
      <TweenOne
        key="image"
        className="image3 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim
        className="text-wrapper"
        key="text"
        type={isMobile ? 'bottom' : 'right'}
        leaveReverse
        style={{ top: '40%' }}
      >
        <h2 key="h2">工作日历与生产线管理</h2>
        <p key="p1" style={{ maxWidth: 280 }}>
          生产线批量管理：支持生产线的批量导入与导出，快速完成部署与维护
        </p>
        <p key="p2" style={{ maxWidth: 280 }}>
          灵活产能配置：自定义工作日历与生产线产能，精确匹配多样化生产需求
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page3.propTypes = {
  isMobile: PropTypes.bool,
};
