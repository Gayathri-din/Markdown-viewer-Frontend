import React, { useState } from 'react';
import axios from 'axios';

const DocumentForm = () => {
  const [document, setDocument] = useState({ title: '', content: '' });
  const [isEditing, setIsEditing] = useState(false); // Track if you're editing or creating

  const handleChange = (e) => {
    setDocument({
      ...document,
      [e.target.name]: e.target.value
    });
  };

  const saveDocument = async () => {
    try {
      if (isEditing) {
        const response = await axios.put(`http://localhost:5000/api/documents/${document._id}`, document);
        console.log('Document updated successfully:', response.data);
      } else {
        const response = await axios.post('http://localhost:5000/api/documents', document);
        console.log('Document created successfully:', response.data);
      }
      // Optionally handle UI updates after successful save
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server error:', error.response.status, error.response.data);
      } else if (error.request) {
        // Request was made but no response received
        console.error('Network error:', error.request);
      } else {
        // Something else caused the error
        console.error('Error:', error.message);
      }
    }
  };
  
  return (
    <div>
      <h1>{isEditing ? 'Edit Document' : 'New Document'}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        saveDocument();
      }}>
        <input
          type="text"
          name="title"
          value={document.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={document.content}
          onChange={handleChange}
          placeholder="Content"
        />
        <button type="submit">{isEditing ? 'Update' : 'Save'}</button>
      </form>
    </div>
  );
};

export default DocumentForm;
