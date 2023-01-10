import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Container>
        <h1 className="center">연락처</h1>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
