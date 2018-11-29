import React from "react";
import {Input as InputBoo} from 'react-validation-boo';
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";

class ValidateSelect extends InputBoo {
  state = {
    value: ''
  };
  changeSelect = (event) => {
    this.setState({
      value: event.target.value
    });
    this.change(event);
  };
  render() {
    const {
      classes,
      formControlProps,
      name,
      labelProps,
      inputProps
    } = this.props;
    const labelText = this.props.vBoo.getLabel();

    const error = this.props.vBoo.hasError();
    const text = error ? this.props.vBoo.getError() : labelText;
    const labelClasses = classNames({
      [" " + classes.labelRootError]: error
    });

    return (
      <FormControl
        {...formControlProps}
        className={formControlProps.className + " " + classes.formControl}
      >
        <InputLabel className={classes.labelRoot + labelClasses}
          htmlFor={name} {...labelProps}>{text}</InputLabel>
        <Select
          value={this.state.value}
          onChange={this.changeSelect}
          {...inputProps}
        >
          {this.props.children}
        </Select>
        {error ? (
          <Clear className={classes.feedback + " " + classes.labelRootError} />
        ) : null}
      </FormControl>
    );
  }
}

export default withStyles(customInputStyle)(ValidateSelect);