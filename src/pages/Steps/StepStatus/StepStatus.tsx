import {useState} from 'react'
import { useAppSelector } from '../../../hooks/index'
import { postForm } from '../../../http'
import DetailsHeading from '../../../components/DetailsHeading/DetailsHeading'
import {AiFillCheckCircle} from 'react-icons/ai'
const StepStatus = () => {
  const {file} = useAppSelector(state => state.singleFileUpload)
  const {files} = useAppSelector(state => state.multipleFileUpload)
  const {primaryAddress} = useAppSelector(state => state.address)
  const {basicDetails} = useAppSelector(state => state.basicdetails)
  const {geolocation}=useAppSelector(state=>state.location)

  const [show, setShow] = useState(false);


  const handleSubmitForm =async () => {
    // Submit the formc

    
//     console.log(primaryAddress)
//   console.log(files[0])
// console.log(basicDetails)
//   console.log(file)
  
const data={
  id: 0,
  created_at: "now",
  name: basicDetails?.userName||"string",
  email: basicDetails?.email||"string",
  phone_number: basicDetails?.phone||"string",
  address_1: primaryAddress?.address_one||"string",
  address_2: primaryAddress?.address_two||"string",
  city: primaryAddress?.city||"string",
  state: primaryAddress?.state||"string",
  pincode: primaryAddress?.pinCode||0,
  country: primaryAddress?.country||"string",
  geolocation: geolocation||"string",
  single_file:file,
  multi_file:files[0]|| [
    {
      path: "string",
      name: "string",
      type: "string",
      size: 0,
      mime: "string",
      meta: {},
      url: "string"
    }
  ]
}


   
    console.log("data",data)
try{
    const response=await postForm(data);
    console.log(response.data)
}catch(error){
  console.log(error)
}
finally{
    setShow(true);
}
  
  };

  return (
    <div>


<div  className="mx-auto flex flex-col gap-11 min-h-[240px] w-full items-center justify-center bg-gray-900 text-white">
<DetailsHeading value='Submit The Form And View Status'/>

{!show &&  <button className="group relative my-14 h-12 w-48 overflow-hidden rounded-2xl bg-blue-500 text-lg font-bold text-white" onClick={handleSubmitForm}>
   Submit The From
    <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
  </button>}

   { show && <div className='mx-auto flex flex-col gap-11 min-h-[240px] w-full items-center justify-center bg-gray-900 text-white'>
    <div className='logo text-green-500 text-6xl border-blue-400 border-2 rounded-full' ><AiFillCheckCircle/></div>
    <div className='text'>Your form has been  submitted Successfully</div>
    </div>
}

</div>
    </div>
  )
}

export default StepStatus
