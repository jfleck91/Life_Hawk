import React from "react";
import Navbar from "../../components/Navbar";
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

const Info  = () => (

<div style={{backgroundImage: 'url(' + require('../../images/info.jpg') + ')',backgroundSize: 'cover',textAlign: 'center' }}>

<Navbar />
<br /> <br />

<Grid style={{ justifyContent: 'center', alignItems: 'center', maxWidth: '800px'}}>
    <h1> My Info </h1>
    <p>something to come later</p>

    <br />
    <br /> <br />

<h4>My Dr's</h4>
<br />


<Form inline >
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Dr Name" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Type" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Location" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Phone" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>
 <br /> 

 <Table responsive style={{background: "white"}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Type</th>
      <th>Location</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Dr Smith</td>
      <td>Primary Care</td>
      <td>Mesa,AZ</td>
      <td>555-555-5555</td>
   
    </tr>
    <tr>
      <td>2</td>
      <td>Dr Cole</td>
      <td>Pshycologist</td>
      <td>Gilbert, AZ</td>
      <td>555-555-5555</td>
    </tr>
  </tbody>
</Table>

<br /> <br />
<h4>My Insurance</h4>
<br />
<Form inline>
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Name" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Type" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Group" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="ID" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Phone" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>

 <br />

<Table responsive style={{background: "white"}}>
 <thead>
   <tr>
   <th>#</th>
     <th>Name</th>
     <th>Type</th>
     <th>Group</th>
     <th>Id</th>
     <th>Phone</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Aetna</td>
     <td>Medical HMO</td>
     <td>ab59302859</td>
     <td>103893850302a</td>
     <td>555-555-5555</td>
   </tr>
   <th>#</th>
     <td>Aetna</td>
     <td>Dental</td>
     <td>ae4029</td>
     <td>a1284703055</td>
     <td>555-555-5555</td>


 </tbody>
</Table>

<br /> <br />
<h4> Alergies </h4>

 <br />

<Form inline>
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Name" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Reaction" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>

 <br />

<Table responsive style={{background: "white"}}>
 <thead>
   <tr>
     <th>#</th>
     <th>Allergy</th>
     <th>Reaction</th>

   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Peanuts</td>
     <td>Anaphylaxis</td>
     <td></td>
   </tr>
   <tr>
     <td>2</td>
     <td>amoxicilyn</td>
     <td>Rash</td>
   </tr>
 </tbody>
</Table>

<br /> <br />

    <h4> Emergency Contacts </h4>

 <br />

<Form inline >
  <FormGroup controlId="formInline">
    <FormControl type="text" placeholder="Name" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Address" />
  </FormGroup>{' '}
  <FormGroup controlId="formInlineEmail">
    <FormControl type="text" placeholder="Phone" />
  </FormGroup>{' '}
  <Button type="submit">Submit</Button>
</Form>
 <br />

<Table responsive style={{background: "white"}}>
 <thead>
   <tr>
     <th>#</th>
     <th>Name</th>
     <th>Address</th>
     <th>Phone</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Ben Rogie</td>
     <td>Phoenix, AZ</td>
     <td>555-555-5555</td>
   </tr>
   <tr>
     <td>2</td>
     <td>Matt Moldach</td>
     <td>Phoenix, AZ</td>
     <td>555-555-5555</td>
   </tr>

 </tbody>
</Table>

<br /><br /><br />
</Grid>
</div>

);

export default Info;