import React,{useState,useEffect,useRef} from 'react'

function Update() {
    let selecRef = useRef();
    let titleRef = useRef(); 
    let imageRef = useRef();
    let priceRef = useRef();

    let [view,setView] = useState([]);

    let onclicking = async ()=>{
        let sendingValue = new FormData();
        sendingValue.append("value",selecRef.current.value);
        sendingValue.append("title",titleRef.current.value);
        sendingValue.append("price",priceRef.current.value);
        sendingValue.append("image",imageRef.current.value);

        let reqOptions={
            method:"PUT",
            body:sendingValue
        }

        let JsonData = await fetch("http://localhost:3197/dataWithValue",reqOptions);
        let JsoData = await JsonData.json();
        console.log(JsoData)
    }

    let gettingData = async ()=>{
      let reqOptions = {
        method: "GET"
      }
       let JsonData = await fetch("http://localhost:3197/data",reqOptions);
       let JsoData = await JsonData.json();
       setView(JsoData);
      }

      useEffect(()=>{
        gettingData();
      },[])
  return (
    <div className='createDiv'>
        <form>
            <h5>Update using Selected Id</h5>
        <div>
            <label htmlFor='sel'>Select Id </label>
            <select ref={selecRef} id='sel'>
                {view.map((item,index)=><option key={index}>{item.id}</option>)}  
            </select>
        </div>
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
            
            <button type='submit' onClick={()=>{onclicking()}}> update </button>
        </form>
       
    </div>
  )
}

export default Update