import React, { useState } from 'react';
import Viewer from '../Components/Viewer';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import Editor from './Components/Editor';

import axios from 'axios';


function Home() {
  const [markdown, setMarkdown] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchMarkdown = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get('/api/markdown/latest');
      setMarkdown(response.data.content);
    } catch (err) {
      setError('Failed to fetch Markdown content.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </Col>
        <Col md={6}>
          <Viewer content={markdown} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={handleFetchMarkdown} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Load Latest Markdown'}
          </Button>
          {error && <Alert variant="danger">{error}</Alert>}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
