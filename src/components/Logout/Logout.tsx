import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineLogout}  from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const Logout = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        
        localStorage.removeItem('token')
        toast.success('Logged Out Successfully', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            icon: '🥹',
          });
          setTimeout(()=>{
        navigate('/')
          },2000)
    }

  return (
    <div onClick={handleLogout} className='my-8 flex cursor-pointer gap-8 justify-center items-center '>
            <div className='text-[20px] flex items-center justify-center'>Logout</div>
        <div className='logo text-white text-3xl'><AiOutlineLogout/> </div>
      
    </div>
  )
}

export default Logout
