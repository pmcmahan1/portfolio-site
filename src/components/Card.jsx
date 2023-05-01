import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Projects(props) {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.coverImg} className="project-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button
            variant="primary"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
