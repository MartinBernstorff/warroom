import React from "react";
import Airtable from "airtable-node";

const ATValues = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Vals')

export default function ResetValues(props) {
    ATValues.list({
        maxRecords: 999,
        pageSize: 100,
        view: "Grid view",
        cellFormat: 'json'
      }).then((values) => {
        console.log(values.records)

        for (const value of values.records) {
          ATValues.update(value.id, {"Promotion": 0}).then(resp => {
            console.log(resp)
          })
        }}
      )
      .catch((error) => {
        console.log(error);
      });

    return null;
}