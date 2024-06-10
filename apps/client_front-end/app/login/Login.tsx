
import Connect from './Connect'
import Link from 'next/link'
import Otp from './Otp'

const Login:React.FC = () => {
 

  return (
    <div className='flex flex-col justify-evenly h-screen '>

      <div className='flex w-full flex-col justify-center items-center gap-5  '>
        <h1 className='text-xl'>Sign In Account</h1>
        <input className='p-4 pl-6 outline-none shadow-lg w-10/12 rounded-xl ' type="text" placeholder='Phone Number,Email ' />

        <div className='flex justify-center relative w-full'>
          <input className='p-4 pl-6 outline-none shadow-lg w-10/12 rounded-xl ' type="text" placeholder='Verify Code' />
          <Otp/>
        </div>
        <div className='flex gap-2 '>
          <h3>{`Don't have an account?`} </h3>
          <Link href={"/login/register"} className=' text-orange-500 '>Register </Link>
        </div>


      </div>
      <div>
        <Connect />
      </div>
    </div>
  )
}

export default Login
