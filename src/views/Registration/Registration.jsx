import React, {Component} from "react";
import {connect, Form} from 'react-validation-boo';
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import ValidateInput from "components/ValidateInput/ValidateInput";
import ValidateSelect from "components/ValidateSelect/ValidateSelect";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
// graphql
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const repoQuery = gql`
  {
  regions {
    id
    label
  }
} 
`;

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class Registration extends Component {
  getAllRegions() {
    if(this.props.data.loading) {
      return <MenuItem value="" disabled>Идёт загрузка...</MenuItem>;
    } else {
      return this.props.data.regions.map((item) => <MenuItem key={'region_' + item.id} value={item.id}>{item.label}</MenuItem>);
    }
  }
  sendForm = (event) => {
    event.preventDefault();

    if(this.props.vBoo.isValid()) {
      let data = this.props.vBoo.getValues();
      console.log(data);
    } else {
      this.props.vBoo.showErrors();
    }
  };
  render() {
    const { classes } = this.props;
    let buttonClass = classNames({
      primary: true,
      disabled: !this.props.vBoo.isValid()
    });

    return (
      <Form connect={this.props.vBoo.connect}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h2 className={classes.cardTitleWhite}>Регистрация</h2>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <ValidateInput
                      name="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <ValidateInput
                      name="surname"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <ValidateSelect
                      name="gender"
                      formControlProps={{
                        fullWidth: true
                      }}>
                      <MenuItem value="" disabled>Выберите пол</MenuItem>
                      <MenuItem value="male">Мужской</MenuItem>
                      <MenuItem value="female">Женский</MenuItem>
                    </ValidateSelect>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <ValidateSelect
                      name="region"
                      formControlProps={{
                        fullWidth: true
                      }}>
                      {this.getAllRegions()}
                    </ValidateSelect>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <ValidateInput
                      name="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <ValidateInput
                      name="phone"
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color={buttonClass} onClick={this.sendForm}>Зарегестрироваться</Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </Form>
    )
  }
}

export default graphql(repoQuery)(connect({
  rules: () => ([
    [
      ['name', 'surname', 'gender', 'email', 'phone', 'region'],
      'required',
      {
        error: 'Обязательно для заполнения'
      }
    ],
    [
      ['email'],
      'required'
    ]
  ]),
  labels: () => ({
    name: 'Имя',
    surname: 'Фамилия',
    email: 'Электронная почта',
    phone: 'Телефон',
    gender: 'Пол',
    region: 'Регион'
  }),
  lang: 'ru'
})(withStyles(styles)(Registration)));