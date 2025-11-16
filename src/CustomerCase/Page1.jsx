import React, { useMemo, useState } from 'react';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col, Tabs, Card, Modal } from 'antd';
import DOMPurify from 'dompurify';
import showdown from 'showdown';
import './style.less';

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
        markdown: `
# 2025

# 城市综合发展指数报告

# 2025 Annual Report of Cities' Comprehensive Development Index

![](https://cdn-mineru.openxlab.org.cn/result/2025-11-01/ae6e04a3-8315-4b32-b39a-f731af9172cd/47589f47795d0d7f1a9ac4681a2fc5ca369a64bdbd6ad4db186e5cca5c2c6d29.jpg)

发布日期：2025年10月

发布地点：中国·北京

发布单位：中国标准化研究院

# 版权声明

本报告由中国标准化研究院组织编写，依照《中华人民共和国著作权法》享有对本报告的发表权、署名权、修改权、复制权、发行权、信息网络传播权、改编权、翻译权以及汇编权等权利。印刷、出售、网络传播、改编、翻译本报告的，应当取得中国标准化研究院许可。使用本报告内容观点的，应注明“信息来源：中国标准化研究院”。报告中所使用的城市统计数据与案例素材等均公开可获得。违反上述声明者，中国标准化研究院将依法追究其相关法律责任。

# CONTENTS 目录

# 前言 01

# 一、城市综合发展指数的构建 02

1. 基本概念 02  
2.研究基础 02  
3.体系构建 03  
4. 评估方法 09

# 二、城市综合发展指数的应用 11

1.研究对象 11  
2.数据来源 11

# 三、城市综合发展指数的评估结果 12

1. 综合概况 12  
2. 专题分析 13

# 结束语 29
`,
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
  const [mdHtml, setMdHtml] = useState('');

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

  const converter = useMemo(() => new showdown.Converter(), []);
  function openMarkdown(item) {
    const md = (item && item.markdown) ? item.markdown : `# ${item.title || '案例'}\n\n${item.description || ''}`;
    setMdTitle(item.title || '详情');
    const html = DOMPurify.sanitize(converter.makeHtml(md));
    setMdHtml(html);
    setMdVisible(true);
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
          <div dangerouslySetInnerHTML={{ __html: mdHtml }} />
        </div>
      </Modal>
    </div>
  );
}
