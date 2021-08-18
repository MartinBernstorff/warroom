import React, { useState, useEffect } from 'react'
import Airtable from 'airtable-node';
import PropositionSection from './propositions/PropositionSection';
import TaskListNone from './propositions/TaskListNone';

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

function Propositions(props) {
  const [run, reRun] = useState({});

  const [activities, setActivities] = useState({});

  useEffect(() => {
      airtable.list({
          maxRecords: 999,
          pageSize: 30,
          view: "L: Today's propositions",
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

  return (
    <div className="grid max-w-5xl">
        {/* <ul className="grid grid-cols-2">
          {goals.length > 0 ? (
              goals
              .filter(record => record.fields.Name.length < 100)
              .slice(0, 6)
              .map((record) => (
                  <FilterButton
                      name={record.fields.Name}
                      setFilter={setFilter}
                  />
              ))
          ) : (
              <p>Fetching Data...</p>
          )}
          </ul> */}
      <div className="grid">
        <TaskListNone
          reRun={reRun}
          activities={activities}
          airtable={airtable}
        />
        <PropositionSection
          reRun={reRun}
          Title="Morning (8-12)"
          TimeOfDay="Morning"
          activities={activities}
          airtable={airtable}
        />
        <PropositionSection
          reRun={reRun}
          Title="Noon (12:30-15:30)"
          TimeOfDay="Noon"
          activities={activities}
          airtable={airtable}
        />
        <PropositionSection
          reRun={reRun}
          Title="Afternoon (16-18)"
          TimeOfDay="Afternoon"
          activities={activities}
          airtable={airtable}
        />
        <PropositionSection
          reRun={reRun}
          Title="Evening (19-22)"
          TimeOfDay="Evening"
          activities={activities}
          airtable={airtable}
        />
        <PropositionSection
          reRun={reRun}
          Title="Maybe"
          TimeOfDay="Maybe"
          activities={activities}
          airtable={airtable}
        />
      </div>
    </div>
  );
}

export default Propositions;
