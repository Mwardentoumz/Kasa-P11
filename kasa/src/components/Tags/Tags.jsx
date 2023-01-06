import './Tags.css'

function Tags(props){
    return (
        <div className='tags' key={props.tag}>
            <p className='tags-single'>{props.content}</p>
        </div>
    )
}

export default Tags