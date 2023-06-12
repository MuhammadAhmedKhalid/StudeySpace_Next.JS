import React from 'react';
import PropTypes from 'prop-types';
import '../styles/alert.css';

function Alert({ type, message }) {
  return (
    <div style={{marginTop: '10px'}} className={`alert alert-${type}`}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
