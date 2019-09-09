'use strict';

const withStyle = require('reaction-with-style');  ///

const TableRow = (props) => {
  let tableCells = [];

  const { level, name, stock, levelRowSpan, nameRowSpan, nameColSpan } = props,
        { className } = TableRow;

  if (level !== undefined) {
    tableCells.push(

      <Td rowSpan={levelRowSpan}>
        {level}
      </Td>

    );
  }

  if (name !== undefined) {
    tableCells.push(

      <Td rowSpan={nameRowSpan} colSpan={nameColSpan}>
        {name}
      </Td>

    );
  }

  if (stock !== undefined) {
    const { product, qty, replenishment } = stock;

    tableCells = [ ...tableCells,

      <Td>
        {product}
      </Td>,

      <Td>
        {qty}
      </Td>,

      <Td>
        {replenishment}
      </Td>

    ];
  }

  return (

    <tr className={`${className}`}>
      {tableCells}
    </tr>

  );
};

module.exports = withStyle(TableRow)`

  border-bottom: 1px solid black;
    
`;

const Td = withStyle.td`

  padding: 0.5rem;
  vertical-align: top;
  
`;
