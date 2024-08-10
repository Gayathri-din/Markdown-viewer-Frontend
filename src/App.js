import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import Viewer from './Viewer';
import DocumentList from './DocumentList';
import api from '../services/api.js';

function App() {
  const [documents, setDocuments] = useState([]);
  const [currentDoc, setCurrentDoc] = useState({ title: '', content: '' });

  useEffect(() => {
    async function fetchDocuments() {
      const response = await api.getDocuments();
      setDocuments(response.data);
    }
    fetchDocuments();
  }, []);

  const saveDocument = async () => {
    if (currentDoc._id) {
      await api.updateDocument(currentDoc._id, currentDoc);
    } else {
      const response = await api.createDocument(currentDoc);
      setDocuments([...documents, response.data]);
    }
  };

  const deleteDocument = async (id) => {
    await api.deleteDocument(id);
    setDocuments(documents.filter(doc => doc._id !== id));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <DocumentList documents={documents} setCurrentDoc={setCurrentDoc} deleteDocument={deleteDocument} />
      </div>
      <div className="editor-viewer">
        <Editor content={currentDoc.content} setContent={(content) => setCurrentDoc({ ...currentDoc, content })} />
        <Viewer content={currentDoc.content} />
        <button onClick={saveDocument}>Save</button>
        <button onClick={() => downloadMarkdown(currentDoc.content, `${currentDoc.title}.md`)}>Download</button>
      </div>
    </div>
  );
}

const downloadMarkdown = (content, filename = "document.md") => {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export default App;
