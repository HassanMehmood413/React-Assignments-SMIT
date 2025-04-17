// Here we will practice useEffect_state 

// USECASE: 

// useEffect allows to automatically run itself when we refresh the page or load the website. It does not require to call anywhere in the code, 
// whenever you just use useEffect with the function you want to call, it will run automatically.

// TIP: 
// Remember we dont use useEffect much as it make the file to render multiple times that downgrades the performance of the website. 



import React, { useEffect, useState } from 'react'

export default function App() {
  const [count, Setcount] = useState(0);
  const [data,setdata] = useState([]);
  const [loading,setloading] = useState(false);
  // const handleClick = () => {
  //   console.log("Compunenet mount")
  // }

  // useEffect(handleClick, [])

  // useEffect(()=>{
  //   return ()=>{
  //     console.log('Component unmount')
  //   }
  // })


  const url = 'https://jsonplaceholder.typicode.com/todos'
  const fetchdata  = async ()=>{
    setloading(true)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setdata(data.slice(0,10))
    setloading(false)
  }

  useEffect(()=>{
    fetchdata()
  },[])

  useEffect(()=>{
    if(count % 5 == 0){
      fetchdata()
    }
  },[count])


  return (
    <div>

      <button onClick={fetchdata}>Click me</button>
      <br />
      <button onClick={() => Setcount(count + 1)}>Count - {count}</button>
      {
        loading ? <div>Loading...</div> : data.length === 0 ? <div>No data...</div> :
        data.map((value,index)=>{
          return <div key={index}>{value.title}</div>
        })
      }

    </div>
  )
}
