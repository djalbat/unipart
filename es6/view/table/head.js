'use strict';

const withStyle = require('reaction-with-style');  ///

const TableHead = (props) => {
  const { className } = TableHead;

  return (

    <tr className={`${className}`}>
      <Th>
        Level
      </Th>
      <Th>
        Name
      </Th>
      <Th>
        Product
      </Th>
      <Th>
        Quantity
      </Th>
      <Th>
        Replenishment
      </Th>
    </tr>

  );
};

module.exports = withStyle(TableHead)`

  text-align: left;
  border-bottom: 2px solid black;
  
`;

const Th = withStyle.th`

  padding: 0.5rem;
  
`;