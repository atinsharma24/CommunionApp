import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="fw-bold mt-4">Connecting People Across Faiths & Interests</h1>
          <p className="text-muted">Bringing communities together through shared events and support.</p>
          <Button as={Link} to="/events" variant="primary">Explore Events</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
