import { React, useEffect } from 'react'
import Items from '../../components/productsitems/items'
import { useDispatch, useSelector } from 'react-redux'
import { getproducts, Setloadmore } from '../../store/slices/product.slice'

export default function Products() {
    const products = useSelector((store) => store.productSlice.products)
    const loadmoreCount = useSelector((store) => store.productSlice.loadmore)
    const dispatch = useDispatch()

    const handleclick = () => {
        dispatch(Setloadmore())
    }

    useEffect(() => {
        dispatch(getproducts())
    }, [])

    return (
        <div>
            <h1 style={{ color: 'white' }}>Products</h1>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {
                    products.slice(0, loadmoreCount).map((product) => (
                        <Items
                            key={product.id}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                }
            </div>

            <button onClick={handleclick}
                style={{ background: 'linear-gradient(to right, #8e44ad, #3498db)', border: 'none', borderRadius: '30px', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s ease' }}
            >
                Show More
            </button>
        </div>
    )
}
