'use strict';

const withStyle = require('reaction-with-style');  ///

const DataTable = require('../table/data');

const LayoutSection = (props) => {
  const { data } = props,
        { className } = LayoutSection;

  return (

    <section className={`${className} layout`}>
      <DataTable data={data} />
    </section>

  );
};

module.exports = withStyle(LayoutSection)`

  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-rows: 4rem auto;
  grid-template-columns: auto 50rem auto;
  grid-template-areas: ". . ." ". data-table ." ;

`;
