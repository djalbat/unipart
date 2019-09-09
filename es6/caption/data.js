'use strict';

const withStyle = require('reaction-with-style');  ///

const DataCaption = (props) => {
  const { data } = props,
        { label } = data,
        { className } = DataCaption;

  return (

    <caption className={`${className} data`}>
      {label}
    </caption>

  );
};

module.exports = withStyle(DataCaption)`

  padding: 0.5rem;
  background-color: lightGrey;
  
`;
