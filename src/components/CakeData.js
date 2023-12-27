import { Link } from 'react-router-dom'
import './CakeData.scss'


export default function CakeData(props) {
    return (
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <div className='cake'>
                <div className='divImage'><img src={props.cake.image} /><br /></div>
                <div className="text-content">
                    <h1>{props.cake.title}</h1>
                    <h2>Difficulty: {props.cake.difficulty}</h2>
                    <div className='divBack'>
                    <button><Link to='/'> 👈</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}