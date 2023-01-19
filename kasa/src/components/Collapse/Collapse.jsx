import './Collapse.css'
import { useState } from "react"
import up from '../../assets/up.png'
import down from '../../assets/down.png'


function Collapse(props) {

    const [visible, setVisible] = useState(false)

    const open = () => {
        setVisible(!visible)
    }

    
    
    
return (
    <div className="collapse">
        <button classname="btn-toggle" onClick={open}>
            {props.title}
            {visible ? <div><img src={up} alt='up'/></div> : <div><img src={down} alt='down'/></div>}
            
        </button>
        {visible &&
            <div className='collapse-content'>
                <div className='collapse-content-text'>
                {props.content instanceof Array ? props.content.map(content => <li className='list-equipment'>{content}</li>) : <div>{props.content}</div>}
                </div>
            </div>}
    </div>
)
}

export default Collapse