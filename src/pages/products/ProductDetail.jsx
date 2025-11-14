import React from 'react';
import DocumentTitle from 'react-document-title';
import getProductById from '../../services/products';

export default class ProductDetail extends React.PureComponent {
  render() {
    const { match } = this.props;
    const id = match && match.params && match.params.id;
    const product = getProductById(id);
    const title = product ? `${product.name} - 产品详情` : '产品详情';
    return (
      <DocumentTitle title={title}>
        <div className="page-wrapper">
          <div className="page">
            <h1>{product && product.name}</h1>
            {product && product.images && (
              <div className="banner-wrapper">
                {product.images.map(src => (
                  <img
                    key={src}
                    src={src}
                    alt="product"
                    style={{
                      width: 240,
                      height: 240,
                      objectFit: 'cover',
                      marginRight: 16,
                    }}
                  />
                ))}
              </div>
            )}
            {product && product.specs && (
              <div>
                <h4>规格参数</h4>
                <ul>
                  {product.specs.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )}
            {product && product.features && (
              <div>
                <h4>功能介绍</h4>
                <ul>
                  {product.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </DocumentTitle>
    );
  }
}