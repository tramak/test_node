import React from 'react';
import MaskedInput from 'react-maskedinput';
import PropTypes from 'prop-types';

function TextMaskPhone(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask='+7(111) 111 11 11'
    />
  );
}

TextMaskPhone.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default TextMaskPhone;