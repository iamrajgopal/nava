import React,{useState,useEffect} from 'react'

function Delete() {
    let [view,setView] = useState([]);
    

    let gettingData = async ()=>{
      let reqOptions = {
        method: "GET"
      }
       let JsonData = await fetch("http://localhost:3197/data",reqOptions);
     
       let JsoData = await JsonData.json();
       setView(JsoData);
       
      }

      let deleting = (index)=>{
        let temp = [...view];
        temp.splice(index,1);
        setView(temp);
      }
      useEffect(()=>{
        gettingData()
      },[])
  return (
    <div>
        <div className='mainDiv'>
            {view.map((item,index)=>{return <div className='cardDiv' key={index} >
                <h3>Title :{item.title.substring(0,8)}</h3>
                <img src={item.image} className='card' alt=''></img>
                <h5>Price :{item.price}</h5>
                <button onClick={()=>{deleting(index)}}>Delete</button>
            </div>})}
        </div>
    </div>
  )
}

export default Delete