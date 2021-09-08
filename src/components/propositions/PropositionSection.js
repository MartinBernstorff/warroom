import React, { useState, useEffect } from 'react'
import PropositionCard from './PropositionCard';
import Airtable from 'airtable-node'

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

today = dd + '/' + mm;

export default function PropositionSection(props) {

    const activities = props.activities

    return (
        <div>
            <h1 className="text-xs font-bold mt-4 text-gray-300 text-center">––– {props.Title} –––</h1>
            <div className="justify-center max-w-full w-full grid grid-cols-1 grid-flow-row-dense gap-2">
                
                    {activities.length > 0 ? (
                        activities
                        .filter(record => record.fields["exec-date"] === today)
                        .filter(record => typeof record.fields["time-of-day"] !== "undefined")
                        .filter(record => record.fields["time-of-day"].includes(props.TimeOfDay) === true)
                        .filter(record => record.fields.hide_today !== true)
                        .map((record) => (
                            <PropositionCard
                                name={record.fields.what_string}
                                key={record.id}
                                id={record.id}
                                notes={record.fields["Learning points"]}
                                goals={record.fields["goals_string"]}
                                concluded={record.fields["Concluded formula"]}
                                airtable={props.airtable}
                            />
                        ))
                    ) : (
                        ""
                    )}
            </div>
        </div>
    );
}
