import React from 'react';
import './Styles/Dropdown.css';
import Options from './Options';

function Dropdown({movie, getValue, selectedMovie}) {
  return (
    <>
        <label className='star__label' htmlFor="star-wars">Choose a Movie:</label> <br/><br/>
            <select 
             name="star-wars" 
             id="star-wars" 
             onChange={getValue} 
             value={selectedMovie}
             placeholder='Select a movie'
             >
                <option value="" disabled>select movie</option>
                {movie.map(mov => {
                return  <Options key={mov.title} title={mov.title}/>
                })}
            </select>
    </>
  )
}

export default Dropdown;