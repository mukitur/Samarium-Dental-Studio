import React from 'react';
import { Container } from 'react-bootstrap';

const PatientInfo = () => {
    return (
        <div>
            <Container>
                <h3 className="text-start my-5">Patient information System</h3>
                <p>This page is confidential and used only for doctors.</p>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Cost(BDT)</th>
      <th scope="col">Treatment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>20000</td>
      <td>Root Canel Treatment</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>300000</td>
      <td>Dental Implant</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>John</td>
      <td>15000</td>
      <td>Porcelain Fused (Metal Crown/Bridge)</td>
    </tr>
    
  </tbody>
</table>
            </Container>
        </div>
    );
};

export default PatientInfo;