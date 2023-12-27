import { Link } from 'react-router-dom'
import './Cake.scss'


export default function Cake(props) {
    return (
        <div title={props.cake.title} className='cakes'>
            <h3 className='title'>
                <Link to='CakePage' state={{ data: props.cake.id }}><img src={props.cake.image}></img></Link>
            </h3>
        </div>
    )
}