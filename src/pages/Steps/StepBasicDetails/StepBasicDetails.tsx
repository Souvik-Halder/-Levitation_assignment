import React from 'react'
import {  useAppDispatch } from '../../../hooks/index'
import { basicDetailsHandler } from '../../../store/BasicDetailsSlice/BasicDetailsSlice';
import DetailsHeading from '../../../components/DetailsHeading/DetailsHeading';
import { toast } from 'react-hot-toast';

interface StepBasicDetailsProps {
    onNext: () => void;
    
    }

    const StepBasicDetails: React.FC<StepBasicDetailsProps> = () =>  {
      const [username, setUsername] = React.useState<string>('');
      const [email, setEmail] = React.useState<string>('');
      const [phone, setPhone] = React.useState<string>('');
      const dispatch = useAppDispatch()

      const handleSubmit = () => {
        console.log(username,email,phone)
        dispatch(basicDetailsHandler({userName:username,phone:parseInt(phone),email:email}))
        toast.success('Basic Details Saved Successfully , Now go to Next', {
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
          },
         icon: '👏',
        });
      }
      
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setUsername(event.target.value);
      
    };
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value);
        
      };
    const hanelePhoneNo = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPhone(event.target.value);
        
      };


  return (
 
<div
  className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
>
  

  <div className="flex w-[20rem] flex-col space-y-10">
  <DetailsHeading value='Basic Details Form'/>
    <div className="text-center text-4xl font-medium">Basic Details Form</div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
        type="text"
        value={username}
        onChange={handleUsername}
        placeholder="Enter Your Username"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

   
    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
      value={email}
      onChange={handleEmail}
        type="email"
        placeholder="Enter Your Email"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <div
      className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
    >
      <input
      value={phone}
      onChange={hanelePhoneNo}
        type="number"
        placeholder="Enter Your Phone Number"
        className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
      />
    </div>

    <button onClick={handleSubmit}
      className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
    >
     Submit
    </button>

  

 
</div>
</div>
  
  )
}

export default StepBasicDetails
