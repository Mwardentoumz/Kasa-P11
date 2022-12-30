import React from "react";
import './collapse.css'

function Collapse({ title, content }) {
    const isItCollapsed = (e) => {
        e.preventDefault()
        const divText = e.target.closest();
        console.log(divText)
        const arrow = e.target.lastChild;
        console.log(arrow)

        if (!divText.classList.contains("show")) {
            divText.classList.add("show");
            arrow.classList.add("rotate");
        } else {
            divText.classList.remove("show");
            arrow.classList.remove("rotate");
        }
    };


    return (
        <div className="collapse ">
            {title}
            <button type="button" className="bouton-collapse" onClick={isItCollapsed}>
                

                <p className="collapse-fleche">&lt;</p>
            </button>
            <div className="collapse-text">
                {Array.isArray(content) ? (
                    <ul className="collapse-list">
                        {content.map((equipment, index) => (
                            <li key={index} className="collapse-list-item">
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="collapse-text">{content}</p>
                )}
            </div>
        </div>
    );
}

export default Collapse