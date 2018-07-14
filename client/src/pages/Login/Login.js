import React from "react";
import Hero from "../../components/Hero";
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Checkbox} from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

const Login = () => (


  <div style={{background: "#e6f2ff"}}>
  <Hero backgroundImage={require('../../images/logo.jpg')}>
  </Hero>

  <br />
  <br /><br />
  <Grid style={{ justifyContent: 'center', alignItems: 'center', width: '700px',}}>
   <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} lg={12}>
      Email
    </Col>
    <Col lg={12}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} lg={2}>
      Password
    </Col>
    <Col lg={12}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col lg={12}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col  lg={12}>
      <Button href="/Home" type="submit">Sign in</Button>
    </Col>
  </FormGroup>

    <FormGroup>
    <Col  lg={12}>
      <Button href="/Home" type="submit">New User</Button>
    </Col>
  </FormGroup>
</Form>

<br /><br />
</Grid>
</div>

);

export default Login;
