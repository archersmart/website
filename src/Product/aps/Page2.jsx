import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

export default function Page2() {
  return (
    <ScrollOverPack
      id="page2"
      className="content-wrapper product-page"
    >
      <QueueAnim
        className="text-wrapper left-text"
        key="text"
        duration={450}
        type="bottom"
        leaveReverse
      >
        <h2 key="h2">BOM 管理</h2>
        <p key="p1" style={{ maxWidth: 260 }}>
          通过精细化管理产品物料清单，准确匹配原材料需求与库存，确保生产排单的完整性与可执行性。
        </p>
        <p key="p2" style={{ maxWidth: 260 }}>
          以可视化图表清晰展现物料清单结构，帮助快速识别用料需求与缺口，提升排产透明度与可控性。
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image2 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(100px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}