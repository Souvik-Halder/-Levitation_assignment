import React from 'react'

interface Props {
    value:string;
}

const DetailsHeading:React.FC<Props> = ({value}) => {
  return (
    <div>
          <button type="button" className="relative w-full flex justify-center items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-900  focus:outline-none   transition duration-300 transform active:scale-95 ease-in-out">
          
            <span className="pl-2 mx-1">{value}</span>
         </button>
    </div>
  )
}

export default DetailsHeading
