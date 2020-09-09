import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';

export function AccountingForm({save, accounting}) {
    const [section, setSection] = useState('');
    const [summary, setSummary] = useState('');
    const [spent, setSpent] = useState('');

    const history = useHistory();

return (
<form onSubmit={(e) => e.preventDefault()}>
    <h2>Section</h2>
    <input value={section} onChange={(e) => setSection(e.target.value)} />
    
    <h2>Spent money</h2>
    <input value={spent} type="number" onChange={(e) => setSpent(e.target.value)} />
    
    <h2>All cost of goods</h2>
    <input value={summary} type="number" onChange={(e) => setSummary(e.target.value)} />

    <button
        onClick={async () => {
          await save({ section, spent, summary });
          history.push("/accounting");
        }}
      >
        Save
      </button>



    <button onClick={() => history.push('/accounting')}>Cancel</button>
</form>)

} 

