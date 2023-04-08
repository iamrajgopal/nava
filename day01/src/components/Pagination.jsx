import React from 'react';

function Pagination1(props) {
  let getData = props.data
  let getData1=props.data2
 
let items = [];
for (let number = 1; number <Math.ceil(getData.length/5)+1; number++) {
  items.push(number);
}
  return (
    <div className='paginationDiv'>
      
      {items.map((item,index)=><div className='pagination' onClick={()=>{getData1(item)}} key={index}>{item}</div>)}
      
    </div>
  )
}

export default Pagination1