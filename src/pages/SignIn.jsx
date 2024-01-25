import {Link} from "react-router-dom";

export default function SignIn(){
    return (
        <>
            <div className='p-3 max-w-lg mx-auto'>
                <h1 className='text-3xl text-center font-semiboldmy-7 p-7'>Login</h1>

                <form className='flex flex-col gap-4'>
                    <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'/>
                    <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password'/>
                    <button className='bg-sky-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Login</button>
                </form>
                <div className=''>
                    <p>Have no  account ?</p>
                    <Link to='/sign-up' className='text-blue-700'>Sign Up</Link>
                </div>
            </div>


        </>
    )
}