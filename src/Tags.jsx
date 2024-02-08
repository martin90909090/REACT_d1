import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

const Tags = ({ tags }) => {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <Badge key={index} variant="primary" className="mr-2">
                    {tag}
                </Badge>
            ))}
        </div>
    );
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default Tags;