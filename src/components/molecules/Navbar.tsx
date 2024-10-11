import { Link } from 'react-router-dom'
import MobileNav from '../ui/mobile-nav'



const Navbar = () => {
  return (
    <>
    <aside className=' text-white h-screen hidden sm:flex'>
    <ul className='flex flex-col gap-12 h-screen max-w-[200px] bg-purple-700 fixed p-6 z-10'>
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
    <MobileNav></MobileNav>
    </>
  )
}

export default Navbar