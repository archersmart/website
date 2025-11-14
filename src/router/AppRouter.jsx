import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import QueueAnim from 'rc-queue-anim';
import Home from '../Home';

const Loading = () => null;

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
    React.createElement(Route, { exact: true, path: '/products/:id', component: ProductDetail }),
    React.createElement(Route, { exact: true, path: '/case-studies', component: CaseStudiesList }),
    React.createElement(Route, { exact: true, path: '/case-studies/:id', component: CaseStudyDetail })
  );
  return React.createElement(Router, null,
    React.createElement(QueueAnim, { type: 'bottom', ease: ['easeOutCubic', 'easeInQuad'] }, routes)
  );
}