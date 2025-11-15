import React from 'react';
import { Row, Col, Tooltip } from 'antd';
import { withRouter } from 'react-router-dom';
import { header } from './data';

function Header(props) {
  const menuChild = header.map((item, i) => {
    console.log(item, 'item');
    if (item.children.length === 0) {
      return (
        <Col key={i.toString()} span={8}>
          <span className="nav-title" onClick={() => {
            const link = item.link;
            console.log(link, 'link');
            props.history.push(link);
          }}>
            {item.title}
          </span>
        </Col>
      );
    }

    const content = item.children.map((child, ii) => (
      <span 
        key={ii.toString()} 
        className="tip-block"
        onClick={() => {
          const link = child.link;

          props.history.push(link);
        }}
      >
        <span className="tip-img"><img src={child.img} alt="img" /></span>
        <div className="tip-content">
          {child.title}
          <div>{child.desc}</div>
        </div>
      </span>
    ));
    return (
      <Col key={i.toString()} span={8}>
        <Tooltip title={content} placement="bottom" overlayClassName="header-tip-wrap">
          <span className="nav-title">{item.title}</span>
        </Tooltip>
      </Col>
    );
  });

  const { className } = props;
  return (
    <header className={className}>
      <Row className="nav">
        {menuChild}
      </Row>
    </header>
  );
}
export default withRouter(Header);
