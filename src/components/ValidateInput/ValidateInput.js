import React from "react";
import {Input as InputBoo} from 'react-validation-boo';
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";

class ValidateInput extends InputBoo {
  render() {
    const labelText = this.props.vBoo.getLabel();
    const {
      classes,
      formControlProps,
      name,
      labelProps,
      inputProps
    } = this.props;

    const error = this.props.vBoo.hasError();
    const text = error ? this.props.vBoo.getError() : labelText;
    const labelClasses = classNames({
      [" " + classes.labelRootError]: error
    });
    const underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underline]: true
    });
    const marginTop = classNames({
      [classes.marginTop]: labelText === undefined
    });

    return (
      <FormControl
        {...formControlProps}
        className={formControlProps.className + " " + classes.formControl}
      >
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + labelClasses}
            htmlFor={name}
            {...labelProps}
          >
            {text}
          </InputLabel>
        ) : null}
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          id={name}
          onChange={this.change} onBlur={this.blur}
          {...inputProps}
        />
        {error ? (
          <Clear className={classes.feedback + " " + classes.labelRootError} />
        ) : null}
      </FormControl>
    );
  }
}

ValidateInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object
};

export default withStyles(customInputStyle)(ValidateInput);
