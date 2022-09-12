import * as React from 'react';
import { HiOutlineCheck } from "react-icons/hi";
import { MdClose } from "react-icons/md";


const ToastNotification: React.FunctionComponent<IToastNotificationProps> = ({ type, text, onclick, icon }) => {
  return (
    <div className='bg-white fixed right-4 top-24 z-10 max-w-[300px] sm:max-w-[380px] w-auto flex items-center rounded-lg shadow-md animatee'>
      <div className='flex justify-between items-center gap-6'>
        <span className='notification-content'>
            <HiOutlineCheck
                className={type === "success" ? "icon success" : "icon error"}
            />
            <p className='ml-6 mt-4 text-[1rem] font-medium '>
              {text}
            </p>
        </span>
        <button className='close' onClick={onclick}>
            <MdClose />
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;
