import React from 'react';
import './Styles/Dropdown.css';
import Options from './Options';

function Dropdown({movie}) {
  return (
    <>
        <label className='star__label' for="star-wars">Choose a Movie:</label> <br/><br/>
            <select name="star-wars" id="star-wars">
                <option value="">select movie</option>
                {movie.map(mov => {
                return  <Options key={mov.title} title={mov.title}/>
                })}
            </select>
    </>
  )
}

export default Dropdown;