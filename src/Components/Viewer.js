import React from 'react';
import ReactMarkdown from 'react-markdown';

function Viewer({ content }) {
  return (
    <div className="viewer">
      <h3>Markdown Preview</h3>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Viewer;
