import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {  useAppDispatch } from '../../../hooks/index'
import { signInHandler } from '../../../store/SignInSlice/SignInSlice';
import { postSignIn } from '../../../http';
import { toast } from 'react-hot-toast';
interface StepLoginProps {
    onNext: () => void;
    // Add other props here
  }


const StepLogin: React.FC<StepLoginProps> = () =>{

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch()
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  }
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  }

    const navigate=useNavigate()
    const onRedirect = async() => {
      console.log(email,password)
      dispatch(signInHandler({email:email,password:password}))
      const response =await postSignIn(email,password);
      console.log(response.data)
      localStorage.setItem('token',response.data.authToken)
      toast.success('Logged In  Successfully', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        icon: '🥳',
      });

      setTimeout(()=>{
        navigate('/activate');
      }
      ,2000)

    }

  return (
    <>
 
<div
  className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
>

  <div className="flex w-[20rem] flex-col space-y-10">
    <div className="text-center text-4xl font-medium">Sign In</div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        type="email"
        value={email}
        onChange={handleEmail}

        placeholder="Email or Username"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Password"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button onClick={onRedirect}
      className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
      LOG IN
    </button>

    <Link
      to={'/forgot'}
      className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
      >FORGOT PASSWORD?</Link>

 
</div>
</div>
 </>
  )
}

export default StepLogin
