'use strict';

const TableRow = require('../table/row');

const TableRows = (props) => {
  const { data } = props,
        { row } = data,
        rows = row, ///
        dataTableRows = [];

        rows.forEach((row) => {
          let { level } = row;

          const { locations } = row,
                levelRowSpan = levelRowSpanFromLocations(locations);

          locations.forEach((location) => {
            let { name } = location,
                nameRowSpan,
                nameColSpan;

            const { stock } = location,
                  stocks = stock, ///
                  stocksLength = stocks.length;

            if (stocksLength === 0) {
              const stock = undefined;  ///

              stocks.push(stock);

              nameRowSpan = 1;
              nameColSpan = 4;
            } else {
              nameColSpan = 1;
              nameRowSpan = nameRowSpanFromStocks(stocks);
            }

            stocks.forEach((stock) => {
              dataTableRows.push(

                <TableRow level={level} name={name} stock={stock} levelRowSpan={levelRowSpan} nameRowSpan={nameRowSpan} nameColSpan={nameColSpan} />

              );

              name = undefined; ///
            });

            level = undefined;  ///
          });
        });

  return dataTableRows;
};

module.exports = TableRows;

function nameRowSpanFromStocks(stocks) {
  const stocksLength = stocks.length,
        nameRowSpan = (stocksLength > 0) ?
                        stocksLength :
                          1;

  return nameRowSpan;
}

function levelRowSpanFromLocations(locations) {
  const levelRowSpan = locations.reduce((levelRowSpan, location) => {
    const { stock } = location,
          stocks = stock, ///
          nameRowSpan = nameRowSpanFromStocks(stocks);

    levelRowSpan += nameRowSpan;

    return levelRowSpan;
  }, 0);

  return levelRowSpan;
}
