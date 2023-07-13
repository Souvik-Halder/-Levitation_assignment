import {useState} from 'react'
import {primaryAddressHandler, secondaryAddressHandler} from '../../store/AddressSlice/AddressSlice'

import {  useAppDispatch } from '../../hooks/index'
interface AddressCardProps {
    onNext: () => void;
    // Add other props here
    }
    const AddressCard: React.FC<AddressCardProps> = ({ onNext }) =>  {
    const [showAdressArray,setShowAddressArray]=useState(false)
    const showContent=()=>{
       setShowAddressArray(true);
    }
    const dispatch = useAppDispatch();
    const [primaryAddress, setPrimaryAddress] = useState<string>('');
    const [primaryPin, setPrimaryPin] = useState<string>('');
    const [primaryCountry, setPrimaryCountry] = useState<string>('');
    const [secondaryAddress, setSecondaryAddress] = useState<string>('');
    const [secondaryPin, setSecondaryPin] = useState<string>('');
    const [secondaryCountry, setSecondaryCountry] = useState<string>('');



    const handlePrimaryAddress = (event: React.ChangeEvent<HTMLInputElement>): void => {
      setPrimaryAddress(event.target.value);
      
    };
    const handlePrimaryCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPrimaryCountry(event.target.value);
        
      };
    const handlePrimaryPin = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPrimaryPin(event.target.value);
        
      };

    const handleSecondaryAddress = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSecondaryAddress(event.target.value);
        
      };
      const handleSecondaryCountry = (event: React.ChangeEvent<HTMLInputElement>): void => {
          setSecondaryCountry(event.target.value);
          
        };
      const handleSecondaryPin = (event: React.ChangeEvent<HTMLInputElement>): void => {
          setSecondaryPin(event.target.value);
          
        };

        const handleSave=()=>{
            console.log(primaryAddress,primaryCountry,primaryPin,secondaryAddress,secondaryCountry,secondaryPin)
            dispatch(primaryAddressHandler({primaryAddress,primaryCountry,primaryPin}))
         if(secondaryAddress!=='' && secondaryCountry!=='' && secondaryPin!==''){
            dispatch(secondaryAddressHandler({secondaryAddress,secondaryCountry,secondaryPin}))
        }
        
        onNext();
    }



  return (
    <div>
          <div  className="mx-auto flex min-h-[700px] w-full items-center justify-center bg-gray-900 text-white">
       <div className="m-auto">
      <div>
         <button type="button" onClick={showContent} className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
               <g>
                  <rect fill="none" height="24" width="24"></rect>
               </g>
               <g>
                  <g>
                     <path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path>
                  </g>
               </g>
            </svg>
            <span className="pl-2 mx-1">Create new Address Label</span>
         </button>
         <div className="mt-5 bg-white rounded-lg shadow">
        
                <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                   <svg className="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g>
                         <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                         <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                         <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                      </g>
                   </svg>
                   <h1 className="inline text-2xl font-semibold leading-none text-black">Primary Address</h1>
                </div>
             </div>
             <div className="px-5 pb-5">
              
                <input  placeholder="Address" value={primaryAddress} onChange={handlePrimaryAddress} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                <div className="flex">
                   <div className="flex-grow w-1/4 pr-2">
                     <input  placeholder="Pin Code" value={primaryPin} onChange={handlePrimaryPin} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                   <div className="flex-grow"><input placeholder="Country" value={primaryCountry}
                   onChange={handlePrimaryCountry} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                </div>
           
             </div>

             {
                showAdressArray && (
                    <>
                    
                <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                   <svg className="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g>
                         <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                         <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                         <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                      </g>
                   </svg>
                   <h1 className="inline text-2xl font-semibold leading-none text-black">Secondary Address</h1>
                </div>
             </div>
             <div className="px-5 pb-5">
              
                <input value={secondaryAddress} onChange={handleSecondaryAddress}  placeholder="Address" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
                <div className="flex">
                   <div className="flex-grow w-1/4 pr-2">
                     <input value={secondaryPin} onChange={handleSecondaryPin}  placeholder="Pin Code" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                   <div className="flex-grow"><input placeholder="Country" onChange={handleSecondaryCountry} value={secondaryCountry} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                </div>
              
             </div>
             </>
                )
             }
         
        
          
            <hr className="mt-4"/>
            <div className="flex flex-row-reverse p-3">
               <div className="flex-initial pl-3">
                  <button type="button" onClick={handleSave} className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3"></path>
                        <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                     </svg>
                     <span className="pl-2 mx-1">Save</span>
                  </button>
               </div>
               <div className="flex-initial">
                  <button type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M8 9h8v10H8z" opacity=".3"></path>
                        <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                     </svg>
                     <span className="pl-2 mx-1">Back</span>
                  </button>
               </div>
            </div>
         </div>
      
      </div>
   </div>
    </div>
    </div>
  )
}

export default AddressCard
