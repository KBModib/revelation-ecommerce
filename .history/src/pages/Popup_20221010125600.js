import React from 'react';

//import { FontAwesomeIcon } from "react-icons/fa";


const Popup = (props) => {
  return (
    <div className='popup-box'>
        <div className='box'>
        <button className='btn-close' onClick={props.handleClose} >FaTimesCircle</button>
        {props.content}
        </div>
      
    </div>
  )
}

export default Popup
