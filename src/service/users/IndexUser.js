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
            <div key={data.id} className='flex flex-col items-center'>
                <img src={data?.avatar} alt="avatar" />
                <p className='text-[#424372] text-center'>
                    {data?.first_name}{data?.last_name}<br/>
                    {data?.email}
                </p>
            </div>
        );
    })

    return (
        <div>
            <Navbar />
            <div className='bg-white/25 my-7 mx-auto md:max-w-xl lg:max-w-2xl p-5 rounded-lg shadow-md'>
                <h1 class="text-4xl font-bold p-4 ml-5 text-[#424372] text-center ">Users</h1>
                <ul>
                    <li className='grid grid-cols-3 gap-8'>
                        {arrUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default IndexUser