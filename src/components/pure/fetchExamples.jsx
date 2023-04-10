import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/fetchServices';

const FetchExamples = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPages, setUsersPerPages] = useState(6);
    const [pages, setPages] = useState(2);
    

    useEffect(() => {
        obtainUsers()
    }, []);

    const obtainUsers = () => {
        getAllUsers()
        .then((response) => {
            console.log('All Users:', response.data);
            setUsers(response.data)
            setTotalUsers(response.total)
            setUsersPerPages(response.per_page)
            setPages(response.total_pages)
        })
        .catch((error) => {
            alert(`Error while retrieving the users: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaineng user: ');
            console.table(users)
        })
    };

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
        .then((response) => {
            console.log('All Paged Users:', response.data);
            setUsers(response.data)
            setTotalUsers(response.total)
            setUsersPerPages(response.per_page)
            setPages(response.total_pages)
        })
        .catch((error) => {
            alert(`Error while retrieving the users: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaineng user: ');
            console.table(users)
        })
    };

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then((response) => {
            console.log('All Paged Users:', response.data);
            setSelectedUser(response.data)
        })
        .catch((error) => {
            alert(`Error while retrieving the user: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaineng user: ');
            console.table(selectedUser)
        })
    };

    return (
        <div>
            <h2>User: </h2>
            {
                users.map((users, index) => 
                (<p key={index} onClick={() => obtainUserDetails(users.id)}>
                    {users.first_name} {users.last_name}
                </p>)
                )
            }
            <p>Showing {usersPerPages} users of {totalUsers}</p>
            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                <h3>User Details</h3>
                {
                    selectedUser && (
                        <div>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img src={selectedUser.avatar} alt='*' style={{height: '50px', width: '50px'}}/>
                        </div>
                        )
                }
            </div>
        </div>
    );
}

export default FetchExamples;
