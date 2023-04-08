import React,{useState,useEffect} from 'react'
import Pagination from './Pagination'

function View() {
     let [view,setView] = useState([]);
     let [page,setPage] = useState([]);

  let gettingData = async ()=>{
    let reqOptions = {
      method: "GET"
    }
     let JsonData = await fetch("http://localhost:3197/data",reqOptions);
     let JsoData = await JsonData.json();
     setView(JsoData);
     setPage(JsoData.slice(0,5))
    };

    useEffect(()=>{
        gettingData();
    },[]);

   let pageEventHandler = (number)=>{
    setPage(view.slice(number*5-5,number*5))
   }

  return (
    <div>
        <div className='mainDiv'>
            {page.map((item,id)=>{return <div className='cardDiv' key={id}>
                <h5>Title :{item.title.substring(0,8)}</h5>
                <img src={item.image} className='card' alt=''></img>
                <h6>Price :{item.price}</h6>
            </div>})}
            
        </div>
        <Pagination data ={view} data2={pageEventHandler}></Pagination>
    </div>
  )
}

export default View