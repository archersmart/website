import React from 'react';
import DocumentTitle from 'react-document-title';
import getProductById from '../../services/products';

export default class ProductDetail extends React.PureComponent {
  render() {
    const { match } = this.props;

    return (
      <div className="page-wrapper">
        <div className="page">
          <h1>你还可以了解以下产品</h1>
        </div>
      </div>
    );
  }
}

