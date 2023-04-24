import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Task5() {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get('https://web-production-e5a3.up.railway.app/task5')
            .then(response => {
                setCities(response.data);
            })
            .catch(err => {
                console.error("Cannot fetch users", err)
                setCities([]);
            })
    }, []);

    return (
        <>
            <div className="content">
                <table className="table">
                    <thead>
                        <tr className="table-primary">
                            <th scope="col">ID</th>
                            <th scope="col">No. of Users</th>
                            <th scope="col">Cities</th>
                            <th scope="col">Avg Income</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {cities.map((city, i) => (
                            <tr key={i}>
                                <th scope="row">{i+1}</th>
                                <td>{city.id}</td>
                                <td>{city.city}</td>
                                <td>{city.income}</td>
                                
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Task5