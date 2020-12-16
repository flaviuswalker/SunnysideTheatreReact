import React from 'react';
import { Table } from 'reactstrap';

const Ticketprice = (props) => {
  return (
    <Table striped className="table">
      <thead>
        <tr>
          <th>Tickets</th>
          <th>Adult</th>
          <th>Senior</th>
          <th>Child</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Price</th>
          <td className='tableinfo'>$5</td>
          <td className='tableinfo'>$3</td>
          <td className='tableinfo'>$2.50</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Ticketprice;