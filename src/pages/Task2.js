import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task2() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://web-production-e5a3.up.railway.app/task2')
            .then(response => {
                setUsers(response.data);
            })
            .catch(err => {
                console.error("Cannot fetch users", err)
                setUsers([])
            })
    }, []);

    return (
        <>
            <div className="content">
                <table className="table">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Income</th>
                            <th scope="col">City</th>
                            <th scope="col">Car</th>
                            <th scope="col">Quote</th>
                            <th scope="col">Phone Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.income}</td>
                                <td>{user.city}</td>
                                <td>{user.car}</td>
                                <td>{user.quote}</td>
                                <td>{user.phone_price}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Task2