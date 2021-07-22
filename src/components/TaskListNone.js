import React, { useState, useEffect } from 'react'
import ActivityCard from "./ActivityCard";
import Airtable from 'airtable-node'

var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
var dd = String(yesterday.getDate()).padStart(2, '0');
var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!

yesterday = dd + '/' + mm;

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

export default function TaskListNone(props) {

    const [activities, setActivities] = useState({});

    useEffect(() => {
        airtable.list({
            maxRecords: 999,
            pageSize: 100,
            view: "L: Review",
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
        <div>
            <div className="justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2">
                
                    {activities.length > 0 ? (
                        activities
                        /* .filter(record => record.fields["Concluded formula"] === 0) */
                        .sort(function (a, b) {
                            return a.fields["Concluded formula"] - b.fields["Concluded formula"];
                        })
                        .filter(record => record.fields["exec-date"] === yesterday)
                        .filter(record => typeof record.fields["time-of-day"] === "undefined")
                        .map((record) => (
                            <ActivityCard
                                name={record.fields.what_string}
                                key={record.id}
                                id={record.id}
                                notes={record.fields["Learning points"]}
                                goals={record.fields["goals_string"]}
                                concluded={record.fields["Concluded formula"]}
                            />
                        ))
                    ) : (
                        <p>Fetching propositions if any uncompleted...</p>
                    )}
            </div>
        </div>
    );
}
