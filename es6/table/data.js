'use strict';

const withStyle = require('reaction-with-style');  ///

const DataCaption = require('../caption/data'),
      DataTableHead = require('../tableHead/data'),
      DataTableRows = require('../tableRows/data');

const DataTable = (props) => {
  const { data } = props,
        { className } = DataTable;

  return (

    <table className={`${className} data`}>
      <DataCaption data={data} />
      <thead>
        <DataTableHead />
      </thead>
      <tbody>
        <DataTableRows data={data} />
      </tbody>
    </table>

  );
};

module.exports = withStyle(DataTable)`

  grid-area: data-table;

`;
