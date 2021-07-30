import Airtable from 'airtable-node'

import React, { useState, useEffect } from "react";
import ActivityCard from './ActivityCard';
import MenuRecord from './Record';

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

export default function AirtableDate(props) {
    const [activities, setActivities] = useState({});

    useEffect(() => {
        airtable.list({
            maxRecords: 999,
            pageSize: 100,
            view: "Multiple choice option",
            cellFormat: 'json'
        })
        .then((data) => {
            setActivities(data.records);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            {activities.length > 0 ? (
                        activities
                        /* .filter(record => record.fields["Concluded formula"] === 0) */
                        .map((record) => (
                            <MenuRecord
                                name={record.fields.what_string}
                                key={record.id}
                                id={record.id}
                            />
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
        </div>
        );
    }