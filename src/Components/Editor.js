import React from 'react';

function Editor({ content, setContent }) {
  return (
    <textarea
      className="editor"
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}

export default Editor;
