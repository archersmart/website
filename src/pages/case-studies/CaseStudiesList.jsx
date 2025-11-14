import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import { getCaseStudies } from '../../services/caseStudies';

export default function CaseStudiesList() {
  const list = getCaseStudies();
  return (
    <DocumentTitle title="客户案例">
      <div className="page-wrapper page4">
        <div className="page">
          <h1>客户案例</h1>
          <i />
          <div className="page4-item-wrapper">
            {list.map(cs => (
              <div key={cs.id} className="page4-item">
                <img src={cs.logo} alt="logo" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                <div style={{ marginTop: 12 }}>
                  <Link to={`/case-studies/${cs.id}`}>{cs.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}