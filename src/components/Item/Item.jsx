import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, name, price, image, stock }) => {

    return (
        <article className='CardItem'>
            <header className='CardHeader'>
                <h4>{name}</h4>
            </header>
            <img src={image} alt={name} className='fotosProductos' />
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                {!stock ? 'Sin Stock Disponible' : `Stock Disponible: ${stock}`}
                </p>
            </section>
            <Link to={`/item/${id}`} className='Option'>Ver Detalles</Link>
        </article>
    )
}

export default Item