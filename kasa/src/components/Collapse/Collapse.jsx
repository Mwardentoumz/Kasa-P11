import './Collapse.css'
import { useState } from "react"

function Collapse(props) {

    const [visible, setVisible] = useState(true)

    const open = () => {
        setVisible(!visible)
    }
    
return (
    <div className="collapse">
        <button classname="btn-toggle" onClick={open}>
            {props.title}
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