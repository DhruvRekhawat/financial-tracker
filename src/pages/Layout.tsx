import Navbar from '@/components/molecules/navbar'
import { auth } from '@/firebase/firebase'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

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
    <main className='sm:grid grid-cols-[200px_minmax(900px,_1fr)] '>
    <Navbar></Navbar>
    <div className='w-full p-8 relative z-10'>
    <Outlet></Outlet>
    </div>
    </main>

    </>
  )
}

export default Layout