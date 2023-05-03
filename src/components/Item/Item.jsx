import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, category,detail }) => {
    return (
        <div className='container'>
            <div className='card'>
                <figure className='card-figure'>
                    <img src={img} alt={name} />
                </figure>
                <div className='contenido'>
                    <h3>{name}</h3>
                    <p >Detalle: {detail}</p>
                    <Link to={`/item/${id}`} >
                        <p>Ver detalle</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item