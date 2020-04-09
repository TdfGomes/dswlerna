import React from 'react';
import PropTypes from 'prop-types';
import BaseInput from './Input';

function Input({ type = 'text', value = '', onChange, onClick, ...props }) {
  return <BaseInput type={type} value={value} onChange={onChange} onClick={onClick} {...props} />;
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
};

export default Input;
