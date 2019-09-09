'use strict';

const withStyle = require('reaction-with-style');  ///

// const MainHeader = require('../header/main'),
//       MainFooter = require('../footer/main'),
//       MainSection = require('../section/main');

const LayoutSection = (props) => {
  const { className } = LayoutSection;

  return (

    <section className={`${className} layout`}>
    </section>

  );
};

module.exports = withStyle(LayoutSection)`

  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;

`;

/*
      <MainHeader />
      <MainSection />
      <MainFooter />

 */