import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';

// import {firestore, docToObject} from '../../firebase';

export function AccountingForm({save, accounting}) {
    // const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState('');
    const [summary, setSummary] = useState('');
    const [spent, setSpent] = useState('');

    const history = useHistory();

// useEffect(() => {
// if (typeof accountingId !== 'undefined') {
//     firestore.collection('/accounting')
//     .doc(accountingId)
//     .get()
//     .then(docToObject)
//     .then((accounting) => {
//         setSection(accounting.section);
//         setSummary(accounting.summary); 
//         setSpent(accounting.Spent); 
//         setIsLoading(false)});
// } else {
//     setIsLoading(false);
// }
// }, []);

// if (isLoading) {
//     return '...Loading...';
// }


return (
<form onSubmit={(e) => e.preventDefault()}>
    <h2>Section</h2>
    <input value={section} onChange={(e) => setSection(e.target.value)} />
    
    <h2>Spent money</h2>
    <input value={spent} onChange={(e) => setSpent(e.target.value)} />
    
    <h2>All cost of goods</h2>
    <input value={summary} onChange={(e) => setSummary(e.target.value)} />

    <button
        onClick={async () => {
          await save({section, spent, summary});
          history.push("/accounting");
        }}
      >
        Save
      </button>


    {/* <button onClick={async () => {
        if (typeof accountingId === 'undefined') {

        
        await firestore
        .collection('accounting')
        .add({section, spent, summary});
        } else {
            await firestore
            .collection('accounting')
            .doc(accountingId)
            .update({section, spent, summary});
        
    }
    history.push('/accounting');}}
    > 
    Save
    </button> */}
    <button onClick={() => history.push('/accounting')}>Cancel</button>
</form>)

} 

// return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={async () => {
//           await save({ name });
//           history.push("/authors");
//         }}
//       >
//         Save
//       </button>

//       <button onClick={() => history.push("/authors")}>Cancel</button>
//     </form>
//   );
// }