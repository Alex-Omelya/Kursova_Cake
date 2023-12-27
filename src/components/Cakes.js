import Cake from './Cake'
import './Cakes.scss'


export default function Cakes(props) {
    return (
        <div>
            <div className="cakes">
                {
                    props.cakes.map((cake, id) =>
                        <Cake cake={cake} id={id} />
                    )
                }
            </div>
        </div>
    )
}