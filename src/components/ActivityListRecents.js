import React, { useState, useEffect } from 'react'
import Todo from "./Record";
import Airtable from 'airtable-node'

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

var dd = String(yesterday.getDate()).padStart(2, '0');
var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!

yesterday = dd + '/' + mm;

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Activities')

export default function ActivityListRecents(props) {

    const [activities, setActivities] = useState({});

    useEffect(() => {
        airtable.list({
            maxRecords: 999,
            pageSize: 100,
            view: "L: Recents/routines",
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
        <div className="mt-2">
            <h1 className="text-3xl font-bold">This week's streaks</h1>
            <div className="justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2">
                
                    {activities.length > 0 ? (
                        activities
                        /* .filter(record => record.fields["Concluded formula"] === 0) */
                        .sort(function (a, b) {
                            return a.fields["Random 1-10 half hour"] - b.fields["Random 1-10 half hour"];
                        })
                        .map((record) => (
                            <Todo
                                name={record.fields.Name}
                                key={record.id}
                                id={record.id}
                                goals={record.fields["Goals text"]}
                            />
                        ))
                    ) : (
                        <p>Fetching propositions if any uncompleted...</p>
                    )}
            </div>
        </div>
    );
}
