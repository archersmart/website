import React from 'react';
import DocumentTitle from 'react-document-title';
import { getCaseStudyById } from '../../services/caseStudies';

export default function CaseStudyDetail(props) {
  const { match } = props;
  const id = match && match.params && match.params.id;
  const cs = getCaseStudyById(id);
  const title = cs ? `${cs.title} - 案例详情` : '案例详情';
  return (
    <DocumentTitle title={title}>
      <div className="page-wrapper">
        <div className="page">
          <h1>{cs && cs.title}</h1>
          {cs && (
            <div>
              <h4>案例背景</h4>
              <p>{cs.background}</p>
              <h4>解决方案</h4>
              <p>{cs.solution}</p>
              <h4>成果展示</h4>
              <p>{cs.outcome}</p>
            </div>
          )}
        </div>
      </div>
    </DocumentTitle>
  );
}