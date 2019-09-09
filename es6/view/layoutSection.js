'use strict';

const withStyle = require('reaction-with-style');  ///

const Table = require('./table');

const LayoutSection = (props) => {
  const { data } = props,
        { className } = LayoutSection;

  return (

    <section className={`${className} layout`}>
      <Table data={data} />
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
