import React, { useMemo, useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Tabs, Card, Modal, Spin } from 'antd';
import MarkdownRenderer from './MarkdownRenderer';
import './style.less';
// Import markdown as raw text via inline raw-loader for legacy webpack compatibility
import caseMd from '!!raw-loader!../assets/markdown/塑料制品案例1.md';

const pointPos = [
  { x: -90, y: -20 },
  { x: 35, y: -25 },
  { x: -120, y: 125 },
  { x: -100, y: 165 },
  { x: 95, y: -5 },
  { x: 90, y: 160, opacity: 0.2 },
  { x: 110, y: 50 },
];

export default class Design extends React.PureComponent {
  state = {
    hoverNum: null,
  }
  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  }

  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  }
  getEnter = (e) => {
    const i = e.index;
    const r = (Math.random() * 2) - 1;
    const y = (Math.random() * 10) + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: (Math.random() * 1000) + 2000,
        yoyo: true,
        repeat: -1,
      }];
  }

  render() {
    const { hoverNum } = this.state;
    const { isMobile } = this.props;
    
    return (
      <div className="page-wrapper page1">
        <div className="page">
          <h1></h1>
          <IndustryCase />
        </div>
      </div>);
  }
}

function IndustryCase() {
  const categories = useMemo(() => ([
    { key: 'all', label: '全部' },
    { key: 'plastics', label: '塑料制品' },
    { key: 'metals', label: '金属制品' },
    { key: 'electronics', label: '电器及附件' },
    { key: 'beverages', label: '食品饮料' },
    { key: 'medical', label: '医药与医疗器械' },
    { key: 'others', label: '其他' },
  ]), []);

  const casesMap = useMemo(() => ({
    plastics: [
      { 
        id: 1, 
        title: '塑料制品案例1', 
        description: '这是一个塑料制品案例的描述。', 
        image: '/demo-img.jpg',
        // External markdown source imported via raw-loader
        markdown: caseMd,
      },
    ],
    metals: [
      { id: 2, title: '金属制品案例1', description: '这是一个金属制品案例的描述。', image: '/metals.jpg' },
    ],
    electronics: [],
    beverages: [],
    medical: [],
    others: [],
  }), []);

  const [activeKey, setActiveKey] = useState('all');
  const [mdVisible, setMdVisible] = useState(false);
  const [mdTitle, setMdTitle] = useState('');
  const [mdSource, setMdSource] = useState('');
  const [mdLoading, setMdLoading] = useState(false);
  const [mdError, setMdError] = useState(null);

  const displayedCases = useMemo(() => {
    if (activeKey === 'all') {
      return [
        ...casesMap.plastics,
        ...casesMap.metals,
        ...casesMap.electronics,
        ...casesMap.beverages,
        ...casesMap.medical,
        ...casesMap.others,
      ];
    }
    const k = activeKey;
    return casesMap[k] || [];
  }, [activeKey, casesMap]);

  const fallbackImg = require('../assets/logo/igarashi.png');
  const getImageUrl = (item) => {
    if (item && item.image) {
      return item.image.indexOf('/') === 0 ? item.image : item.image;
    }
    return fallbackImg;
  };

  function openMarkdown(item) {
    setMdLoading(true);
    setMdError(null);
    try {
      const md = (item && item.markdown) ? item.markdown : `# ${item.title || '案例'}\n\n${item.description || ''}`;
      setMdTitle(item.title || '详情');
      setMdSource(md);
      setMdVisible(true);
    } catch (e) {
      setMdError('Markdown 加载或解析失败');
    } finally {
      setMdLoading(false);
    }
  }
  function closeMarkdown() { setMdVisible(false); }

  return (
    <div>
      <Tabs
        activeKey={activeKey}
        onChange={setActiveKey}
        tabBarStyle={{ textAlign: 'center' }}
      >
        {categories.map(c => (
          <Tabs.TabPane tab={c.label} key={c.key} />
        ))}
      </Tabs>

      <Row gutter={24} style={{ marginTop: 16 }}>
        {displayedCases.map((item, idx) => (
          <Col key={item.id || idx} xs={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            <Card bordered bodyStyle={{ padding: 16 }} onClick={() => openMarkdown(item)} style={{ cursor: 'pointer' }}>
              <div style={{ width: '100%', height: 208, borderRadius: 4, overflow: 'hidden', background: '#f0f2f5' }}>
                <img src={getImageUrl(item)} alt="案例展示图片" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <Card.Meta
                title={item.title || '案例标题待填充'}
                description={item.description || '案例描述待填充'}
                style={{ marginTop: 12 }}
              />
            </Card>
          </Col>
        ))}

        {displayedCases.length === 0 && (
          <Col span={24}>
            <div style={{ borderRadius: 6, border: '1px solid #e8e8e8', background: '#fff', padding: 24, textAlign: 'center', color: '#8c8c8c' }}>
              该分类暂未添加案例内容，后续可在 casesMap 中补充。
            </div>
          </Col>
        )}
      </Row>

      <div style={{ textAlign: 'center', marginTop: 24, color: '#8c8c8c' }}>
        更多案例正在完善上传中……
      </div>

      <Modal 
        visible={mdVisible} 
        title={mdTitle} 
        onCancel={closeMarkdown} 
        footer={null} 
        centered 
        maskClosable
        wrapClassName="customer-case-md"
      >
        <div style={{ maxHeight: '70vh', overflowY: 'auto', padding: 16 }}>
          {mdLoading ? (
            <div style={{ textAlign: 'center', padding: 24 }}>
              <Spin tip="加载中..." />
            </div>
          ) : mdError ? (
            <div style={{ color: '#cf1322' }}>{mdError}</div>
          ) : (
            <MarkdownRenderer source={mdSource} />
          )}
        </div>
      </Modal>
    </div>
  );
}
