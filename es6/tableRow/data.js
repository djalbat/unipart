'use strict';

const withStyle = require('reaction-with-style');  ///

const DataTableRow = (props) => {
  let tableCells = [];

  const { level, name, product, qty, replenishment, levelRowSpan, nameRowSpan, nameColSpan } = props,
        { className } = DataTableRow;

  if (level !== undefined) {
    tableCells.push(

      <td rowSpan={levelRowSpan}>
        {level}
      </td>

    );
  }

  if (name !== undefined) {
    tableCells.push(

      <td rowSpan={nameRowSpan} colSpan={nameColSpan}>
        {name}
      </td>

    );
  }

  if (product !== undefined) {
    tableCells = [ ...tableCells,

      <td>
        {product}
      </td>,

      <td>
        {qty}
      </td>,

      <td>
        {replenishment}
      </td>

    ];
  }

  return (

    <tr className={`${className} data`}>
      {tableCells}
    </tr>

  );
};

module.exports = withStyle(DataTableRow)`

  border-bottom: 1px solid black;
  
`;
