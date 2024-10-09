import { auth } from '@/firebase/firebase'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


const Layout = () => {

  const navigate = useNavigate()

  useEffect(()=>{

    if(!auth.currentUser){ // works with current user is null

      console.log(auth.currentUser, "Inside useEffect")
      navigate("/login")
      
    }
  },[auth.currentUser])



  return (
    <>
    <aside className='bg-purple-700 text-white w-1/3 max-w-[250px] h-screen fixed left-0 p-6'>
        <ul className='flex flex-col gap-12 w-full'>
           <Link to="/">
            <li className='hover:bg-purple-300 hover:text-purple-800 transition-all h-12 rounded-md flex justify-start items-center px-2'>Home</li>
           </Link>
           <Link to="/savings">
            <li className='hover:bg-purple-300 hover:text-purple-800 transition-all h-12 rounded-md flex justify-start items-center px-2'>Savings</li>
           </Link>
           <Link to="/monthly-expenditure">
            <li className='hover:bg-purple-300 hover:text-purple-800 transition-all h-12 rounded-md flex justify-start items-center px-2'>Monthly Costs</li>
           </Link>
           <Link to="/settings">
            <li className='hover:bg-purple-300 hover:text-purple-800 transition-all h-12 rounded-md flex justify-start items-center px-2'>Settings</li>
           </Link>
        </ul>
    </aside>

    <div className='absolute left-[250px] w-2/3 p-8'>
    <Outlet></Outlet>
    </div>

    </>
  )
}

export default Layout