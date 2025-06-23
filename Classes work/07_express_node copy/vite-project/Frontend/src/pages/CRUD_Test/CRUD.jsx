import React, { useState, useEffect } from 'react';

export default function CRUD() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);
                setProducts(data);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {JSON.stringify(product)}
                    </li>
                ))}
            </ul>
        </div>
    );
}
