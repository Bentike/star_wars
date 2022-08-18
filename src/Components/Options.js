import React from 'react';
import "./Styles/Option.css";

function Options ({title}) {
  return (
    <>
      <option className='star__options' value={title}>{title}</option>
    </>
  )
}

export default Options;