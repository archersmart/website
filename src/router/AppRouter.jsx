import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import Loadable from 'react-loadable';
import QueueAnim from 'rc-queue-anim';
import Home from '../Home';
import APS from '../Product/aps';
import RouteLoading from '../components/RouteLoading';



const Loading = () => (
  <div style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>
    <Spin size="large" tip="页面加载中..." />
  </div>
);

const ProductDetail = Loadable({
  loader: () => new Promise(resolve =>
    require.ensure([], require => resolve(require('../pages/products/ProductDetail').default), 'product-detail')
  ),
  loading: Loading,
});
const CaseStudiesList = Loadable({
  loader: () => new Promise(resolve =>
    require.ensure([], require => resolve(require('../pages/case-studies/CaseStudiesList').default), 'case-studies-list')
  ),
  loading: Loading,
});
const CaseStudyDetail = Loadable({
  loader: () => new Promise(resolve =>
    require.ensure([], require => resolve(require('../pages/case-studies/CaseStudyDetail').default), 'case-study-detail')
  ),
  loading: Loading,
});

export default function AppRouter() {
  const routes = React.createElement(Switch, { key: 'routes' },
    React.createElement(Route, { exact: true, path: '/', component: Home }),
    React.createElement(Route, { exact: true, path: '/products/aps', component: APS }),
    React.createElement(Route, { exact: true, path: '/case-studies', component: CaseStudiesList }),
    React.createElement(Route, { exact: true, path: '/case-studies/:id', component: CaseStudyDetail })
  );
  return React.createElement(Router, null,
    React.createElement(RouteLoading, null),
    React.createElement(QueueAnim, { type: 'bottom', ease: ['easeOutCubic', 'easeInQuad'] }, routes)
  );
}