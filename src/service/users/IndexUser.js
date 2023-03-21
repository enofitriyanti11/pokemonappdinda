import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/pageGroups/Navbar'

function IndexUser() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                console.log(response)
                setUsers(response.data.data)
            }).catch(error => console.log(error))
    }, [])

    const arrUser = users.map((data) => {
        return (
            <p key={data.id}>
                {data?.first_name}{data?.last_name}
            </p>
        );
    })

    return (
        <div>
            <Navbar />
            <h1 class="text-4xl font-bold text-white p-4 ml-5">Users</h1>
            <ul>
                <li className='ml-10'>
                    {arrUser}
                </li>
            </ul>

        </div>
    )
}

export default IndexUser