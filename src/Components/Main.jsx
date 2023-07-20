import React, { useState } from 'react'
import Data from "../TempleteData.json"

const Main = () => {
    const [searchTerm,setSearchTerm] = useState("");
  return (
    <div className='max-w-[1200px] mx-auto p-4'>
      <h2 className='text-center text-4xl text-teal-400 font-semibold uppercase underline'>
        Sea Food
      </h2>
      <input type="text" placeholder='Search Sea Food here...' className='border shadow-md w-full p-3 mt-4' onChange={(e)=>{
        setSearchTerm(e.target.value);
      }}/>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-[20px] p-3'>

        {
            Data.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }else if(val.strMeal.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
                }
            }).map((val)=>{
                return (
                    <div className='bg-white shadow-md rounded-md' key={val.idMeal}>
                    <img src={val.strMealThumb} alt="" className='h-40 w-full rounded-md' />
                    <div className="content p-3">
                        <h4 className='text-teal-500'>{val.strMeal}</h4>
                    </div>
                </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Main
