import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Body>
              <Card.Title>About React Markdown Viewer</Card.Title>
              <Card.Text>
                React Markdown Viewer is a web application designed to provide an intuitive interface for writing, previewing, and managing Markdown documents. 
                With this tool, you can:
              </Card.Text>
              <ul>
                <li>Create and edit Markdown content using a simple editor.</li>
                <li>Preview the formatted Markdown in real-time.</li>
                <li>Save your Markdown documents for later use.</li>
                <li>Download your Markdown files as needed.</li>
                <li>Visualize data using various chart types.</li>
              </ul>
              <Card.Text>
                This project leverages the power of React.js on the front-end, Node.js on the back-end, and MongoDB for data storage. 
                The application also incorporates Bootstrap for styling and Chart.js for data visualization.
              </Card.Text>
              <Card.Text>
                We hope you find this tool useful for your Markdown editing and viewing needs. Feel free to contribute to the project or reach out with any feedback!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
