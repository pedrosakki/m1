import React,{Component} from 'react';
import Columnas from './Columnas';
class Table extends Component {
  render() {
    return (
      <table border="1">
        <tr>
          <Columnas />        
        </tr>
      </table>
    );
  }
}

export default Table;
