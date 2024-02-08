import PropTypes from 'prop-types';

const Footer = ({ footer }) => {
    return (
        <footer className="footer-component">
            <p>{footer}</p>
        </footer>
    );
}

Footer.propTypes = {
    footer: PropTypes.string.isRequired,
};

export default Footer;