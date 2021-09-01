import React, { useState, useEffect } from 'react'
import ActivityCard from "./ActivityCard";
import Airtable from 'airtable-node'

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

export default function TaskList(props) {

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
        <div className="justify-center max-w-full w-full grid grid-cols-2">
            {activities.length > 0 ? (
                activities
                /* .filter(record => record.fields["Show in menu"] === 1)
                .filter(record => record.fields["Fin"] !== true)
                .sort((a,b) => (a.fields["Rting_UL"] < b.fields["Rting_UL"]) ? 1 : ((b.fields["Rting_UL"] < a.fields["Rting_UL"] ) ? -1 : 0)) */
                .map((record) => (
                    <ActivityCard
                        name={record.fields.what_string}
                        key={record.id}
                        id={record.id}
                        endorsed={record.fields.Promotion}
                        notes={record.fields["Learning points"]}
                        what_id={record.fields["What?"]}
                        rating={record.fields["T Well Spent?"]}
                        group={record.fields["Group #"]}
                        duration={record.fields["Rough time spent (mins)"]}
                        time-of-day={record.fields["time-of-day"]}
                    />
                ))
            ) : (
                <p>Fetching warroom if any uncompleted...</p>
            )}
        </div>
    );
}
