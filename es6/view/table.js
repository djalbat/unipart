'use strict';

const withStyle = require('reaction-with-style');  ///

const TableCaption = require('./table/caption'),
      TableHead = require('./table/head'),
      TableRows = require('./table/rows');

const Table = (props) => {
  const { data } = props,
        { className } = Table;

  return (

    <table className={`${className}`}>
      <TableCaption data={data} />
      <thead>
        <TableHead />
      </thead>
      <tbody>
        <TableRows data={data} />
      </tbody>
    </table>

  );
};

module.exports = withStyle(Table)`

  grid-area: data-table;

`;
