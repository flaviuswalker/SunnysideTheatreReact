import React from 'react';
import { Table, Row } from 'reactstrap';

const Timestable = (props) => {
  return (
    <Table striped >
      <thead>
        <tr>
          <th>Movie</th>
          <th>Showing</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">The Goonies</th>
          <td className='tableinfo'>03.45pm</td>
          <td className='tableinfo'>06.00pm</td>
          <td className='tableinfo'>08.00pm</td>
        </tr>
        <tr>
          <th scope="row">Teen Wolf</th>
          <td className='tableinfo'>06.00pm</td>
          <td className='tableinfo'>08.00pm</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">After Hours</th>
          <td className='tableinfo'>08.00pm</td>
          <td className='tableinfo'>10.00pm</td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Day of the Dead</th>
          <td className='tableinfo'>Midnight</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Timestable;