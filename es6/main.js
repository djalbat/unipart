'use strict';

require('./preamble');

const reaction = require('reaction'),
      withStyle = require('reaction-with-style'); ///

const data = require('./data'),
      LayoutSection = require('./view/layoutSection');

const { ReactDOM } = reaction,
      { renderStyles } = withStyle;

const bodyDOMElement = document.querySelector('body');

renderStyles();

ReactDOM.render(

  <LayoutSection data={data} />

  ,
  bodyDOMElement
);
