import {useState} from 'react'
import {addressHandler} from '../../store/AddressSlice/addressSlice'

import {  useAppDispatch } from '../../hooks/index'
import DetailsHeading from '../DetailsHeading/DetailsHeading';
import { toast } from 'react-hot-toast';
import { storeGeoLocation } from '../../store/LocationSlice/locationSlice';
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
    const [city, setCity] = useState<string>('');
    const [State,setState] = useState<string>('');



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
      const handleCity = (event: React.ChangeEvent<HTMLInputElement>): void => {
          setCity(event.target.value);
          
        };
      const handleState = (event: React.ChangeEvent<HTMLInputElement>): void => {
          setState(event.target.value);
          
        };

        const handleSave=()=>{
            console.log(primaryAddress,primaryCountry,primaryPin,secondaryAddress,city,State)
            dispatch(addressHandler({address_one:primaryAddress,pinCode:parseInt(primaryPin),state:State,city:city,country:primaryCountry,address_two:secondaryAddress}))

            const location=navigator.geolocation;
            console.log(location)
            location.getCurrentPosition((position)=>{
               // console.log(position)
               // console.log(position.coords.latitude.toString()+" "+position.coords.longitude.toString())   
               const geolocation=position.coords.latitude.toString()+" "+position.coords.longitude.toString()
               dispatch(storeGeoLocation({geolocation}))
            })

             setTimeout(()=>{
            toast.success('Address Details and Geolocationd Saved Successfully, Now you can go to the next page', {
               style: {
                 border: '1px solid #713200',
                 padding: '16px',
                 color: '#713200',
               },
               icon: '👏',
             });
            },5000)
 
    }

  return (
    <div>
          <div  className="mx-auto flex min-h-[700px] w-full items-center justify-center bg-gray-900 text-white">
       <div className="m-auto">
      <div>
        <DetailsHeading value='Address Details'/>
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
                   <h1 className="inline text-2xl font-semibold leading-none text-black"> Address One</h1>
                </div>
             </div>
             <div className="px-5 pb-5">
              
                <input  placeholder="Address" value={primaryAddress} onChange={handlePrimaryAddress} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
               
           
             </div>
           

            
                   
                    
                <div className="flex">
                <div className="flex-1 py-5 pl-5 overflow-hidden">
                   <svg className="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g>
                         <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null"></path>
                         <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2"></path>
                         <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                      </g>
                   </svg>
                   <h1 className="inline text-2xl font-semibold leading-none text-black"> Address Two</h1>
                </div>
             </div>
             <div className="px-5 pb-5">
              
                <input value={secondaryAddress} onChange={handleSecondaryAddress}  placeholder="Address" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/> 
            
              
             </div>
             <div className="px-5 pb-5">     
              <div className="flex">
                 <div className="flex-grow w-1/4 pr-2">
                   <input  placeholder="Pin Code" value={primaryPin} onChange={handlePrimaryPin} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                 <div className="flex-grow"><input placeholder="Country" value={primaryCountry}
                 onChange={handlePrimaryCountry} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
              </div>
           
         
           </div>
             <div className="px-5 pb-5">
             <div className="flex">
                   <div className="flex-grow w-1/4 pr-2">
                     <input  placeholder="State" value={State} onChange={handleState} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                   <div className="flex-grow"><input placeholder="City" value={city}
                   onChange={handleCity} className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-whitefocus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/></div>
                </div>
                </div>
          
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
             
            </div>
         </div>
      
      </div>
   </div>
    </div>
    </div>
  )
}

export default AddressCard
