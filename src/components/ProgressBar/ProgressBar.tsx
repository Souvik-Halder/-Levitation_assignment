import { useSelector } from "react-redux";
interface ProgressBarProps {
    value:number
  }

  const ProgressBar: React.FC<ProgressBarProps> = ({ value }) =>{

  const progressBar = [
    {
      icon: (
        <span className="flex items-center justify-center w-6 h-6  md:w-10 md:h-10 border-2 border-[#7FA6DF] rounded-full shrink-0 ">
          1
        </span>
      ),
      text: " Basic Details",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-6 h-6  md:w-10 md:h-10 border-2 border-[#7FA6DF] rounded-full shrink-0 ">
          {" "}
          2
        </span>
      ),
      text: "Address",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-6 h-6  md:w-10 md:h-10 border-2 border-[#7FA6DF] rounded-full shrink-0 ">
          {" "}
          3
        </span>
      ),
      text: "Single File Upload",
    },
    {
      icon: (
        <span className="flex items-center justify-center w-6 h-6  md:w-10 md:h-10 border-2 border-[#7FA6DF] rounded-full shrink-0 ">
          {" "}
          4
        </span>
      ),
      text: "Multiple File Upload",
    }];
  return (
    <div className="w-[90%] md:w-[60%] min-h-fit p-4 mx-auto text-center flex justify-between items-center">
      {progressBar.map((item, index) => (
        <>
          <div className="flex flex-col items-center justify-start">
            {index + 1 < value ? (
              <span className="flex items-center justify-center w-10 h-10 bg-[#77f59d] rounded-full md:h-10 md:w-10 dark:bg-blue-800 shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            ) : (
              item.icon
            )}
            <span className={`font-semibold mx-1 ${value>index+1 && "text-[#77f59d]"}`}>{item.text}</span>
          </div>
          <div
            className={`h-1 w-full rounded-full ${index+1<value && "bg-[#77f59d]"} bg-[#7FA6DF] ${
              index == 3 && "hidden"
            }`}></div>
        </>
      ))}
    </div>
  );
};

export default ProgressBar;