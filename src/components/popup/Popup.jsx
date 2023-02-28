import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import "./popup.css"
function Popup() {

    useEffect(() => {
        async function users() {
            let user = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUserlist(user.data)
        }
        users()
    }, [])

    let [userlist, setUserlist] = useState([])
    return (
        <div className='popup'>
            <table>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Address</th>
                </tr>
                {

                    userlist.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default Popup