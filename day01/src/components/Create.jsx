import React,{useRef} from 'react';


function Create() {
  
  let titleRef = useRef(); 
  let imageRef = useRef();
  let priceRef = useRef();

  let onsubmittingUpdate = async()=>{
     let dataToSubmit = new FormData();
     dataToSubmit.append("title",titleRef.current.value);
     dataToSubmit.append("price",priceRef.current.value);
     dataToSubmit.append("image",imageRef.current.value);

     let reqOptions = {
      method:"POST",
      body:dataToSubmit
     }
  
     let JsonData = await fetch("http://localhost:3197/updateCard",reqOptions);
     let JsoData = JsonData.json();
     console.log(JsoData)
  }
  return (
    <div className='createDiv' >
       <form>
        <div>
        <label htmlFor='tit'>Title :</label>
        <input id='tit' type='text' ref={titleRef}></input>
        </div>
        <div>
        <label htmlFor='ima'>Image URL :</label>
        <input id='ima' type='url' ref={imageRef}></input>
        </div>
        <div>
        <label htmlFor='pri'>Price :</label>
        <input id='pri' type='number' ref={priceRef}></input>
        </div>
        <button type='submit' onClick={()=>{onsubmittingUpdate()}}> submit</button>
       </form>

     

      </div>
  )
}

export default Create