import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page1({ isMobile }) {
  return (
    <ScrollOverPack id="page1" className="content-wrapper product-page">
      <TweenOne
        key="image"
        className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <QueueAnim
        type={isMobile ? 'bottom' : 'right'}
        className="text-wrapper"
        key="text"
        leaveReverse
      >
        <h2 key="h2">智能排单与原材料分析</h2>
        <p key="p1" style={{ maxWidth: 310 }}>
          融合关键要素：订单需求 + 产能资源 + 原材料库存
        </p>
        <p key="p2" style={{ maxWidth: 310 }}>
          智能分析优化：AI 自动识别瓶颈并动态排单
        </p>
        <p key="p3" style={{ maxWidth: 310 }}>
          创造业务价值：高质量排产，避免缺料与积压，提升交付效率与库存积压率
        </p>
      </QueueAnim>
    </ScrollOverPack>
  );
}
Page1.propTypes = {
  isMobile: PropTypes.bool,
};