import axios from "axios";
import React, { useEffect, useState } from "react";
function DataFetch(){
const [data,setData]=useState([]);
const[error,setError]=useState([]);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        setData(response.data)
    })
    .catch(("error when data fetch",error));
   setError("error")
})
    
    return(
        <>
           <h1>Data in table format</h1>
           <table>
            <thead>
               <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
               </tr>
            </thead>
            <tbody>
               {data.map((user)=>(
                <tr key={user.id}>
                <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                </tr>
            ) )}
            </tbody>
           
           </table>
        </>
    )
}
export default DataFetch;