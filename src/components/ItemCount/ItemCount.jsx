import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, onConfirm }) => {
    const [quantity, setQuantity] = useState(1)

    const handleClickAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleClickSub = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' disabled={!stock} onClick={handleClickSub}>-</button>
                <h4 className='Number'>{!stock ? '-' : quantity}</h4>
                <button className='Button' disabled={!stock} onClick={handleClickAdd}>+</button>
            </div>
            <div >
                <button className='carritoButton' onClick={() => onConfirm(quantity)} disabled={!stock}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount;

