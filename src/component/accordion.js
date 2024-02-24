import React from 'react'
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
const Accordion = props => {
    const handleClick = () => {
        if (props?.isOpen) {
            props.setActiveItem(null)
        }
        else
            props.setActiveItem(props.id)
    }
    return (
        <div className='acc-container'>
            <div className='accTitle' onClick={() => handleClick()}>
                <div>
                    <h2>
                        {props?.title}
                    </h2>
                </div>
                <div>
                    {props?.isOpen ? <FaCaretDown /> : <FaCaretUp />}
                </div>
            </div>
            {
                props?.isOpen &&
                <div className='accContent'>
                    {props?.content}
                </div>
            }
        </div>
    )
}

export default Accordion;
