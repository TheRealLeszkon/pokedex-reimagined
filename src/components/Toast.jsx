import { useEffect, useState } from "react";

function Toast({ shinyFilter=true ,text="Default Msg"}) {
    const [visible,SetVisible] =useState(false);
    useEffect(
        ()=>{
            SetVisible(shinyFilter)
            let timer;
            if(shinyFilter){
                timer =setTimeout(() => {
                    SetVisible(false);
                },3000)
            }
            return () =>clearTimeout(timer)
        },
        [shinyFilter]
    )
    return ( 
        <div id="toast-bottom-right" className={`fixed transition-all duration-700 ease-in-out transform 
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} 
    pointer-events-none
    flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x 
    rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm right-5 bottom-5 
    dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800`} role="alert">
            <div className="text-sm font-normal text-amber-300 ">{text}</div>
        </div>
     );
}

export default Toast;