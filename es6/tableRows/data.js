'use strict';

const DataTableRow = require('../tableRow/data');

const DataTableRows = (props) => {
  const { data } = props,
        { row } = data,
        rows = row, ///
        dataTableRows = [];

        rows.forEach((row) => {
          let { level } = row;

          const { locations } = row,
                levelRowSpan = levelRowSpanFromLocations(locations);

          locations.forEach((location) => {
            let { name } = location;

            const { stock } = location,
                  stocks = stock, ///
                  nameRowSpan = nameRowSpanFromStocks(stocks),
                  stocksLength = stocks.length;

            if (stocksLength === 0) {
              const nameColSpan = 4;

              dataTableRows.push(

                <DataTableRow level={level} name={name} levelRowSpan={levelRowSpan} nameRowSpan={nameRowSpan} nameColSpan={nameColSpan} />

              );
            } else {
              stocks.forEach((stock) => {
                const { product, qty, replenishment } = stock,
                      nameColSpan = 1;

                dataTableRows.push(

                  <DataTableRow level={level} name={name} product={product} qty={qty} replenishment={replenishment} levelRowSpan={levelRowSpan} nameRowSpan={nameRowSpan} nameColSpan={nameColSpan} />

                );

                name = undefined; ///
              });
            }

            level = undefined;  ///
          });
        });

  return dataTableRows;
};

module.exports = DataTableRows;

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
