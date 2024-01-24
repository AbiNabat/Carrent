import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Header(){
    return (
       <header className='bg-slate-200 shadow-md'>
           <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
               <div className='flex'>
                   <Link to='/'>
                   <h1 className='font-bold text-xl'>
                       <span className='text-slate-500'>Airbag</span>
                       <span className='text-slate-600'>WaW</span>
                   </h1>
                   </Link>
               </div>
               <div className='flex'>
                   <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                       <input className='bg-transparent focus:outline-none w-24 sm:w-64' type='text' placeholder='...serach'/>
                       <FaSearch className='text-slate-500'/>
                   </form>
               </div>
               <div className='flex'>
                   <ul className='flex gap-4 cursor-pointer'>
                       <Link to='/'>
                       <li className='hidden sm:inline text-sky-700 hover:underline'>Home</li>
                       </Link>
                       <Link to='/about'>
                       <li className='hidden sm:inline text-sky-700 hover:underline'>About</li>
                       </Link>
                       <Link to='/sign-in'>
                       <li className='text-sky-700 hover:underline'>SignIn</li>
                       </Link>
                   </ul>
               </div>
           </div>
       </header>
    )
}