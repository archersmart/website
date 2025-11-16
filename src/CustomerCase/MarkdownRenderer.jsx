import React from 'react';
import Markdown from 'markdown-to-jsx';
// fallback manual highlighting to avoid bundler incompatibilities

export default function MarkdownRenderer({ source }) {
  const overrides = {
    h1: { component: 'h1', props: { className: 'md-h1' } },
    h2: { component: 'h2', props: { className: 'md-h2' } },
    h3: { component: 'h3', props: { className: 'md-h3' } },
    h4: { component: 'h4', props: { className: 'md-h4' } },
    h5: { component: 'h5', props: { className: 'md-h5' } },
    h6: { component: 'h6', props: { className: 'md-h6' } },
    a: { component: (props) => <a {...props} target="_blank" rel="noopener noreferrer" /> },
    img: { component: (props) => <img {...props} style={{ maxWidth: '100%', height: 'auto' }} /> },
    ul: { component: (props) => <ul {...props} className="md-ul" /> },
    ol: { component: (props) => <ol {...props} className="md-ol" /> },
    li: { component: (props) => <li {...props} className="md-li" /> },
    table: { component: (props) => <div className="md-table-wrap"><table {...props} className="md-table" /></div> },
    thead: { component: (props) => <thead {...props} className="md-thead" /> },
    tbody: { component: (props) => <tbody {...props} className="md-tbody" /> },
    tr: { component: (props) => <tr {...props} className="md-tr" /> },
    th: { component: (props) => <th {...props} className="md-th" /> },
    td: { component: (props) => <td {...props} className="md-td" /> },
    pre: {
      component: ({ children, ...props }) => {
        const child = Array.isArray(children) ? children[0] : children;
        const code = child && child.props && child.props.children ? child.props.children : '';
        const className = child && child.props && child.props.className ? child.props.className : '';
        const match = /language-(\w+)/.exec(className || '') || /lang-(\w+)/.exec(className || '');
        const language = match && match[1] ? match[1] : '';
        const html = typeof code === 'string' ? highlightCode(code, language) : '';
        return (
          <pre className="md-pre" {...props}>
            <code className="md-code-block" dangerouslySetInnerHTML={{ __html: html }} />
          </pre>
        );
      },
    },
    code: { component: (props) => <code {...props} className="md-code-inline" /> },
  };

  return (
    <div className="markdown-body">
      <Markdown options={{ forceBlock: true, overrides }}>{source || ''}</Markdown>
    </div>
  );
}

function highlightCode(code, lang) {
  const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let c = esc(code);
  if (lang === 'js' || lang === 'javascript' || lang === 'ts' || lang === 'typescript') {
    c = c
      .replace(/(\/\/.*?$)/gm, '<span class="tok-comm">$1</span>')
      .replace(/([\{\}\[\]\(\)\.\,;])/g, '<span class="tok-op">$1</span>')
      .replace(/\b(const|let|var|function|return|if|else|for|while|break|continue|switch|case|default|try|catch|finally|new|class|extends|super|this|import|from|export|as|await|async|yield|true|false|null|undefined)\b/g, '<span class="tok-key">$1</span>')
      .replace(/("[^"]*"|'[^']*')/g, '<span class="tok-str">$1</span>')
      .replace(/\b(0x[0-9a-fA-F]+|\d+\.\d+|\d+)\b/g, '<span class="tok-num">$1</span>');
  } else if (lang === 'json') {
    c = c
      .replace(/("[^"]*")(?=\s*:)/g, '<span class="tok-key">$1</span>')
      .replace(/("[^"]*")/g, '<span class="tok-str">$1</span>')
      .replace(/\b(\d+\.\d+|\d+)\b/g, '<span class="tok-num">$1</span>');
  } else if (lang === 'bash' || lang === 'sh') {
    c = c.replace(/(^|\s)(#[^\n]*)/g, '$1<span class="tok-comm">$2</span>');
  }
  return c;
}