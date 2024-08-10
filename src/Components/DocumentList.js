/*import React from 'react';

function DocumentList({ documents, setCurrentDoc, deleteDocument }) {
  return (
    <div className="document-list">
      <h3>Documents</h3>
      <ul>
        {documents.map(doc => (
          <li key={doc._id}>
            <span onClick={() => setCurrentDoc(doc)}>{doc.title}</span>
            <button onClick={() => deleteDocument(doc._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/documents')
      .then(response => {
        setDocuments(response.data);
        console.log(response.data); // For debugging
      })
      .catch(error => {
        console.error('There was an error fetching the documents!', error);
      });
  }, []); // Empty dependency array to run once on component mount

  return (
    <div>
      <h1>Document List</h1>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>{doc.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;



