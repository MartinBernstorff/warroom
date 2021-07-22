import React, { useState, useEffect } from 'react'
import ValueCard from "./ValueCard";
import Airtable from 'airtable-node'

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Vals')

export default function ValueList(props) {

    const [values, setValues] = useState({});

    useEffect(() => {
        airtable.list({
            maxRecords: 999,
            pageSize: 100,
            view: "Weekly review",
            cellFormat: 'json'
        })
        .then((data) => {
            setValues(data.records);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(values)

    console.log("Testing " + props.cycle)

    return (
        <div className="justify-center max-w-full w-full grid grid-cols-2">
            {values.length > 0 ? (
                values
                .filter(record => record.fields["Value certainty"] !== 1)
                .sort(function(a, b){return b.fields["Promotion"] - a.fields["Promotion"]})
                .map((record) => (
                    <ValueCard
                        name={record.fields.Name}
                        key={record.id}
                        id={record.id}
                        goals={record.fields["goal_string"]}
                        promotion={record.fields["Promotion"]}
                    />
                ))
            ) : (
                <p>Fetching value-shepherd if any uncompleted...</p>
            )}
        </div>
    );
}
