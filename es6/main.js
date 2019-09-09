'use strict';

require('./preamble');

const reaction = require('reaction'),
      withStyle = require('reaction-with-style'); ///

const LayoutSection = require('./section/layout');

const { ReactDOM } = reaction,
      { renderStyles } = withStyle;

const bodyDOMElement = document.querySelector('body');

renderStyles();

ReactDOM.render(

  <LayoutSection />

  ,
  bodyDOMElement
);
