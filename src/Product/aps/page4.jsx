import React from 'react';
import TweenOne from 'rc-tween-one';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';

export default function Page4() {
  return (
    <ScrollOverPack id="page4" className="content-wrapper product-page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">
          部署与服务保障
        </h2>
        <p key="p">
          提供专业的部署与服务保障，确保系统的稳定运行与数据的安全保护
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0, opacity: 1, duration: 550, delay: 150, ease: 'easeOutQuad',
        }}
        style={{ transform: 'translateY(50px)', opacity: 0 }}
      />
    </ScrollOverPack>
  );
}