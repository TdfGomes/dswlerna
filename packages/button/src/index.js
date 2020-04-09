import React from 'react';
import PropTypes from 'prop-types';
import BaseButton from './Button';

function Button({ onClick, children, ...props }) {
  return (
    <BaseButton onClick={onClick} {...props}>
      {children}
    </BaseButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
