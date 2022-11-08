import Timeline from './Timeline';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Navbar';




function App() {

  const [query,setQuery] = useState('')
  const [newsList,setNewsList] = useState([])

  const search = () =>{
    axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
    .then(res=>{
      setNewsList(res.data.hits)
      console.log(newsList)
    })
  }

  useEffect(()=>{

    let IsSubscribed = true;
   if (IsSubscribed){
      search()
    }

      return ()=>{
      IsSubscribed = false;
    }
  },[query])



  return (
    <div className='App'>
      <Navbar/>
      <input placeholder='Search news' className='input' onChange={(event)=>setQuery(event.target.value)}/>
      {newsList.map((res,id)=>{

         return (
           <div key={id}>
              <Timeline url={res.url} title={res.title} author={res.author} 
              comments={res.num_comments} date={res.created_at_i}/>
            </div>
         )
        
      })}
      </div>
      
   
  );
}

export default App;
