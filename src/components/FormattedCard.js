import Card from 'react-bootstrap/Card';

export const FormattedCard = ({ place }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{place.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{place.vicinity}</Card.Subtitle>
        <Card.Link href="#">{place.formatted_phone_number}</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}