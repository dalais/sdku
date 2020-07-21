import React, {useState} from 'react';

import {iAx} from "../../index";

const Admin = () => {
    const [foods, setFoods] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    const getFoods = async () => {
        try {
            const { data } = await iAx.get("products");
            setFoods(data);
            setFetchError(null);
        } catch (err) {
            setFetchError(err.message);
        }
    };

    return (
        <div className="home">
            <h1>This is Admin page</h1>
            <section>
                <button onClick={() => getFoods()}>
                    Get Foods
                </button>
                <ul>
                    {foods.map((food, i) => (
                        <li key={i}>{food.name}</li>
                    ))}
                </ul>
                {fetchError && (
                    <p style={{ color: 'red' }}>{fetchError}</p>
                )}
            </section>
        </div>
    );
};

export default Admin;