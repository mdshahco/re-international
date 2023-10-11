import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      });
  };
  const handleSubmit =async (e)=>{
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch('/server/auth/signup',
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7 uppercase'>Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input type="text" name="" id="username" placeholder='username' className='border p-3 rounded-lg' onChange={handleChange}/>
        <input type="email" name="" id="email" placeholder='Email address' className='border p-3 rounded-lg'  onChange={handleChange}/>
        <input type="password" name="" id="password" placeholder='Password' className='border p-3 rounded-lg' onChange={handleChange}/>
        <button disabled={loading} className='bg-green-500 text-white uppercase rounded-lg p-3 hover:opacity-90 disabled:opacity-80'>
          {loading ? 'Loading...': 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
      <p>Have your account?</p>
      <Link to={"/sign-in"}>
        <span className=' text-blue-600'>Sign In</span>
      </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
