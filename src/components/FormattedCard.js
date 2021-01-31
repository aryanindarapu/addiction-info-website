import Card from 'react-bootstrap/Card';

import '../index.css';

export const FormattedCard = ({ place, callbackFromHome }) => {
  return (
    <Card>
      <Card.Body className="cardbody" onClick={() => callbackFromHome(place)}>
        <Card.Title style={{fontWeight: 'bold'}}>{place.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{textTransform: 'uppercase'}}>{place.vicinity}</Card.Subtitle>
        <Card.Link href="tel:">{place.formatted_phone_number}</Card.Link>
        <Card.Link href="#">Add A Rating (Coming Soon)</Card.Link>
      </Card.Body>
    </Card>
  )
}
