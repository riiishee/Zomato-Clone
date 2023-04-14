import React from 'react';
import './fillters.css';
import FilterItem from './filteritem'

 function Fillters({filterList}) {
  return (
    <>
    <div className='filters'>

    {filterList && filterList.map((filter)=>{
        return <FilterItem  filter={filter} key={filter.id}/>
    })}



       

        </div>
    </>
      
    
  )
}

export default Fillters