import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const MyCard = ({ imgUrl, title, description }) => {    
    return (
        <Card className="my-card" style={{ width: '18rem', border: 'none' }}>
            <Card.Img variant="top" src={imgUrl} style={{ width: '290px', height: '207px' }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

MyCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default MyCard;