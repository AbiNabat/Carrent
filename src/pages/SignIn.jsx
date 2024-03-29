import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export default function SignIn(){
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value

        });
    };

    const handlerSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('/api/auth/signin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
            const data = await res.json();
            if (data.success === false){
                setLoading(false);
                setError(data.message);
                return;
            }
            setLoading(false);
            setError(null);
            navigate('/');
        }catch (error) {
            setLoading(false);
            setError(error.message);
        }

    };

    return (
        <>
            <div className='p-3 max-w-lg mx-auto'>
                <h1 className='text-3xl text-center font-semiboldmy-7 p-7'>Sign In</h1>

                <form className='flex flex-col gap-4' onSubmit={handlerSubmit}>
                   
                    <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
                    <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
                    <button disabled={loading} className='bg-sky-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? '...Loading' : 'Sign Up'}</button>
                </form>
                <div className='flex gap-2 mt-5'>
                    <p>Dont Have an account ?</p>
                    <Link to='/sign-up' className='text-blue-700'>Sign In</Link>
                </div>
                {error && <p className='text-red-600 mt-5'>{error}</p>}
            </div>


        </>
    )
}