import React from 'react';
import { Table } from 'reactstrap';

const Snackprice = (props) => {
  return (
    <Table striped className="table">
      <thead>
        <tr>
          <th></th>
          <th>Large</th>
          <th>Small</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Popcorn</th>
          <td className='tableinfo'>$2</td>
          <td className='tableinfo'>$1</td>      
        </tr>
        <tr>
          <th scope="row">Soda</th>
          <td className='tableinfo'>$1.50</td>
          <td className='tableinfo'>75c</td>          
        </tr>
        <tr>
          <th scope="row">Hot Dog</th>
          <td className='tableinfo'>$1</td>
          <td className='tableinfo'></td>          
        </tr>
      </tbody>
    </Table>
  );
}

export default Snackprice;