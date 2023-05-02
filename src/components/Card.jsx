import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Projects(props) {
  return (
    <div className="card">
      <Card>

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="card-buttons">
          <Button
            variant="primary"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </Button>
          <Button
            variant="secondary"
            href={props.srcUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
