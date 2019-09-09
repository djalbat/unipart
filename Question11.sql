SELECT

    id

        FROM

            stock INNER JOIN (

                SELECT

                    package_id

                    COUNT(DISTINCT(location_id)) AS distinct_location_count,

                        FROM stock

                            GROUP BY package_id

            ) AS distinct_location_counts

                ON stock.package_id = distinct_location_counts.package_id

                    WHERE distinct_location_count > 1 ;
