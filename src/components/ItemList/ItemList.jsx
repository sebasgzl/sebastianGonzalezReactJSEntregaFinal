import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return(
        <div className='divGaleria'>
            {products.map(product => <Item key={product.id}{...product}/>)}
        </div>
    )
}

export default ItemList