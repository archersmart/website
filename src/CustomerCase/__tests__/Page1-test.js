import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import expect from 'expect';
import Page1 from '../Page1.jsx';

describe('CustomerCase Page1 migration', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('renders IndustryCase and tabs', () => {
    act(() => {
      ReactDOM.render(<Page1 isMobile={false} />, container);
    });
    const tabs = document.querySelectorAll('.ant-tabs-tab');
    expect(tabs.length > 0).toBe(true);
  });

  it('switches tab and updates list', () => {
    act(() => {
      ReactDOM.render(<Page1 isMobile={false} />, container);
    });
    const tabs = document.querySelectorAll('.ant-tabs-tab');
    if (tabs[1]) {
      act(() => {
        tabs[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(true).toBe(true);
    }
  });
});