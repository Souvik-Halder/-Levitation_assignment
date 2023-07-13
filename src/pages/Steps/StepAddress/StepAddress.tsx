
import AddressCard from '../../../components/AddressCard/AddressCard'
interface StepAddressProps {
   onNext: () => void;
   // Add other props here
   }
   const StepAddress: React.FC<StepAddressProps> = ({ onNext }) =>  {
   
  return (
   
<AddressCard onNext={onNext}/>
   
  )
}

export default StepAddress
