'use strict';

const withStyle = require('reaction-with-style');  ///

const DataTableHead = (props) => {
  const { className } = DataTableHead;

  return (

    <tr className={`${className} data`}>
      <th>
        Level
      </th>
      <th>
        Name
      </th>
      <th>
        Product
      </th>
      <th>
        Quantity
      </th>
      <th>
        Replenishment
      </th>
    </tr>

  );
};

module.exports = withStyle(DataTableHead)`

  text-align: left;
  border-bottom: 2px solid black;
  
`;
