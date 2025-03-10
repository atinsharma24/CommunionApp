import { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const eventsData = [
  { title: "Charity Drive", date: "2025-03-15", category: "Charity", location: "NYC", description: "Help those in need." },
  { title: "Community Meetup", date: "2025-03-20", category: "Social", location: "LA", description: "Network with others." },
];

function Events() {
  const [events, setEvents] = useState(eventsData);
  const [category, setCategory] = useState("");

  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "", description: "" });

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.category || !newEvent.location || !newEvent.description) return;
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", date: "", category: "", location: "", description: "" });
  };

  const filteredEvents = category ? events.filter(e => e.category === category) : events;

  return (
    <Container>
      <h2 className="fw-bold mb-3">Events</h2>

      <Form.Group className="mb-3">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Charity">Charity</option>
          <option value="Social">Social</option>
        </Form.Select>
      </Form.Group>

      <h4 className="fw-bold">Add New Event</h4>
      <Form className="mb-4">
        <Form.Control type="text" placeholder="Title" className="mb-2" onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} />
        <Form.Control type="date" className="mb-2" onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} />
        <Form.Select className="mb-2" onChange={e => setNewEvent({ ...newEvent, category: e.target.value })}>
          <option value="">Select Category</option>
          <option value="Charity">Charity</option>
          <option value="Social">Social</option>
        </Form.Select>
        <Form.Control type="text" placeholder="Location" className="mb-2" onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} />
        <Form.Control as="textarea" placeholder="Description" className="mb-2" onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} />
        <Button variant="success" onClick={addEvent}>Add Event</Button>
      </Form>

      {filteredEvents.map((event, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{event.date} | {event.location}</Card.Subtitle>
            <Card.Text>{event.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Events;
