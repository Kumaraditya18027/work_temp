import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'

function spinner(){
  const p=[];
  for(let i=0;i<36;i++)
  {
    p.push(<p key={i} className="p"></p>);
  }
  return p;
}
const Loader = () => {
  const[loading,setLoading]=useState(true);
  const location=useLocation();
  useEffect(()=>{
    setLoading(true);
    const tiemout=setTimeout(()=>{
      setLoading(false);
    },1500);
    return ()=>clearTimeout(tiemout);
  },[location.pathname])
  return (
    <>
      {loading&&(
        <div className='fixed z-50 flex h-full w-screen items-center justify-center bg-white dark:bg-gray-800'>
          <div className='loader-wrapper'>
            {spinner()}
          </div>
        </div>
      )}
    </>
  )
};
export default Loader;
