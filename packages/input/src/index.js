import React from 'react';
import PropTypes from 'prop-types';

function Input({ type = 'text', value = '', onChange, onClick }) {
  return <input type={type} value={value} onChange={onChange} onClick={onClick} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default Input;
