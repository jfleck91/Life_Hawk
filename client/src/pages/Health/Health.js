import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

const Health  = () => (

<div>

<Navbar />

<Grid>
    <h1> My Health </h1>
    <p>something to come later</p>

    <br />
    <br /> <br />

<h4>Medications</h4>
<br />


<Form inline >
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Med Name" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Strength" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Dosage" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Treats" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>
 <br /> 

 <Table responsive>
  <thead>
    <tr>
      <th>#</th>
      <th>Medication</th>
      <th>Strength</th>
      <th>Dosage</th>
      <th>Treats</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Trazodone</td>
      <td>150mg</td>
      <td>1x at bed</td>
      <td>insomia</td>
   
    </tr>
    <tr>
      <td>2</td>
      <td>alprazolam</td>
      <td>1mg</td>
      <td>as needed</td>
      <td>Anxiety</td>
    </tr>
    <tr>
      <td>3</td>
      <td>zyrtec</td>
      <td>10 mg</td>
      <td>1 daily</td>
      <td>Allergy</td>
    </tr>
  </tbody>
</Table>

<br /> <br />
<h4>Daily Numbers</h4>
<br />
<Form inline>
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="BP Top" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="BP Bottom" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Heart Rate" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Blood Sugar" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Weight" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>

 <br />

<Table responsive>
 <thead>
   <tr>
     <th>#</th>
     <th>BP Top</th>
     <th>BP Bottom</th>
     <th>Blood Sugar</th>
     <th>Heart Rate</th>
     <th>Weight</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>120</td>
     <td>80</td>
     <td>92</td>
     <td>74</td>
     <td>195</td>
  
   </tr>
   <tr>
     <td>2</td>
     <td>118</td>
     <td>78</td>
     <td>90</td>
     <td>76</td>
     <td>197</td>
   </tr>

 </tbody>
</Table>

<br /> <br />
<h4> Dr Visits </h4>

 <br />

<Form inline>
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Name" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Date" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Reason" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Treatment" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>

 <br />

<Table responsive>
 <thead>
   <tr>
     <th>#</th>
     <th>Name</th>
     <th>Date</th>
     <th>Reason</th>
     <th>Treatment</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Dr Smith</td>
     <td>10/21/17</td>
     <td>Flu Shot</td>
     <td></td>
   </tr>
   <tr>
     <td>2</td>
     <td>Dr Cole</td>
     <td>09/12/17</td>
     <td>med refills</td>
     <td>Anxiety</td>
   </tr>
 </tbody>
</Table>

<br /> <br />

    <h4> Notes </h4>

 <br />

<Form inline>
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Notes" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>

 <br />

<Table responsive>
 <thead>
   <tr>
     <th>#</th>
     <th>Notes</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>reminder to ask dr about higher dose of sleep med</td>
   </tr>
   <tr>
     <td>2</td>
     <td>temp was 102 degrees today</td>
   </tr>

 </tbody>
</Table>
</Grid>
</div>


);

export default Health;