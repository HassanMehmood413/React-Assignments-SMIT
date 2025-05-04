import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Items from '../../components/productsitems/items'

export default function Products() {
    const [data, setData] = useState([])
    const [slice, setSlice] = useState(5)
    const [loading, setLoading] = useState(false)

    const response = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            console.log(res.data)
            setData(res.data)
            // return res.data
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        response()
    }, [])




    return (
        <div>
            <h1 style={{ color: 'white' }}>Products</h1>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    data.slice(0, slice).map((item, value) => {
                        return <Items key={value} title={item.title} description={item.description} price={item.price} image={item.image} />
                    })
                }
            </div>
            
            <button onClick={() => { setSlice(slice + 5) }}
                style={{ background: 'linear-gradient(to right, #8e44ad, #3498db)', border: 'none', borderRadius: '30px', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s ease' }}
            >Show More</button>

        </div>
    )
}
