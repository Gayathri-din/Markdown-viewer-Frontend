import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getDocuments = () => api.get('/document');
export const getDocument = (id) => api.get(`/document/${id}`);
export const createDocument = (document) => api.post('/document', document);
export const updateDocument = (id, document) => api.put(`/document/${id}`, document);
export const deleteDocument = (id) => api.delete(`/document/${id}`);

export default {
  getDocuments,
  getDocument,
  createDocument,
  updateDocument,
  deleteDocument,
};
