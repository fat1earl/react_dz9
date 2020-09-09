import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useCollection, useFirebaseCollection } from '../../useFirebase';
import {firestore, collectionToObject} from '../../firebase';


export function AccountingList({accounting, remove}) {
    const history = useHistory();


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