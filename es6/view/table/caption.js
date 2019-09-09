'use strict';

const withStyle = require('reaction-with-style');  ///

const TableCaption = (props) => {
  const { data } = props,
        { label } = data,
        { className } = TableCaption;

  return (

    <caption className={`${className}`}>
      {label}
    </caption>

  );
};

module.exports = withStyle(TableCaption)`

  padding: 0.5rem;
  background-color: lightGrey;
  
`;
