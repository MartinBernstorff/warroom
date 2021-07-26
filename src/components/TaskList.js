import React, { useState, useEffect } from 'react'
import MenuRecord from "./Record";
import Airtable from 'airtable-node'

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Activities')

export default function TaskList(props) {

    const [activities, setActivities] = useState({});

    useEffect(() => {
        airtable.list({
            maxRecords: 999,
            pageSize: 100,
            view: "L: All activities",
            cellFormat: 'json'
        })
        .then((data) => {
            setActivities(data.records);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    console.log(activities)

    console.log("Testing " + props.cycle)

    return (
        <div className="mt-4">
            <h1 className="text-3xl font-bold">Menu</h1>
            <div className="mt-2 justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2">
                {activities.length > 0 ? (
                    activities
                    .filter(record => record.fields["Show in menu"] === 1)
                    .filter(record => record.fields["Fin"] !== true)
                    .sort((a,b) => (a.fields["Rting_UL"] < b.fields["Rting_UL"]) ? 1 : ((b.fields["Rting_UL"] < a.fields["Rting_UL"]) ? -1 : 0))
                    .map((record) => (
                        <MenuRecord
                            name={record.fields.name_string}
                            key={record.id}
                            id={record.id}
                            goals={record.fields["Goals text"]}
                        />
                    ))
                ) : (
                    <p>Fetching activity-menu if any uncompleted...</p>
                )}
            </div>
        </div>
    );
}
