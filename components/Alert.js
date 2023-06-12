import React from 'react';
import PropTypes from 'prop-types';
import '../styles/alert.css';

function Alert({ type, message }) {
    console.log('here')
  return (
    <div className={`alert alert-${type}`}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
