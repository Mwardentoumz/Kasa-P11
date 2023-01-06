import './Stars.css';
import Full from '../../assets/Colored.png'
import Vide from '../../assets/Empty.png'

// -------------------------------------------

const Colored = () => {
    return <img src={Full} alt="stars" />
}

const Empty = () => {
    return <img src={Vide} alt="stars" />
}

function Stars(props){
    console.log(props.rating)
    return (
        <div className="stars">
            {Array.from({length: parseInt(props.rating)}, (index) => <Colored key={index}/>)}
            {Array.from({length: 5 - parseInt(props.rating)}, (index) => <Empty key={index}/>)}
        </div>
    )
}

export default Stars