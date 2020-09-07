import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useCollection, useFirebaseCollection } from '../../useFirebase';
import {firestore, collectionToObject} from '../../firebase';


export function AccountingList({accounting, remove}) {
    // const [accounting, setAccounting] = useState(null);
    const history = useHistory();
    // const {data: food, isLoading, error, add, remove} = useFirebaseCollection('accounting');
    // const [error, setError] = useState(null);

    // const [food, setFood] = useState(null);
    // const [error, setError] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //         const response = await firestore.collection('accounting').get();
    
    //         setAccounting(collectionToObject(response));
    //       } catch (e) {
    //         setError(e);
    //       } finally {
    //         setIsLoading(false);
    //       }
    //     }
    //     getData();
    //   }, []);

    // if (isLoading) {
    //     return '...Loading...'
    // }
    // if (error) {
    //     return `Unexpected error. ${error.message}`

    // }

    return (
        <>
        <button onClick={() => history.push('/accounting/add')}>
            Add control
        </button>
        <table>
            <thead>
                <tr>
                    <th>
                        Позиция
                    </th>
                    <th>
                        Цена
                    </th>
                    <th>
                        Сумма
                    </th>
                    <th></th>
                    <th></th>
                </tr>
                


            </thead>

            <tbody>
                {accounting.map((accounting) => (
                <tr key={accounting.id}>
                    
                    <td>{accounting.section}</td>
                    <td>{accounting.spent}</td>
                    <td>{accounting.summary}</td>

                    <td>
                        <button onClick={() => {history.push(`/accounting/${accounting.id}`)}}
                    >Edit</button>
                    </td>
                    <td><button onClick={async () => {
                       remove(accounting.id);
                        // await firestore
                        // .collection('accounting').doc(accounting.id)
                        // .delete();

                        // setAccounting(accounting.filter((a) => a.id !== accounting.id));
                    }}
                    >Delete</button>
                    </td>
                </tr>
                ))}

            </tbody>

        </table>
        </>
    )

}