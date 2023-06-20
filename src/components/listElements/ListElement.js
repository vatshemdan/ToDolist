import React from 'react'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import './listElements.css'

export default function ListElement(props) {
  return (
    <div className='DisplayItems'>
       <CancelRoundedIcon className="deleteIcon" onClick={()=>{
        props.handleDelete(props.id);
       }}/>
      <li className="listItem">{props.element}</li>
    </div>
  )
}
