import { useState } from "react"
import Form from "./Form"
function Header (){
    const [isOpen, setIsOpen] = useState(false)
        const openBtn = () => {
            setIsOpen(true)
        }

        const closeBtn = () => {
            setIsOpen(false)
        }
    return <div>

     <div className="bg-green-600 w-full h-[70px] sm:h-[50px] flex justify-between px-[30px]  text-white ">
        <h1 className="sm:text-[35px] text-[40px] font-bold sm:mt-[-4px]"> Notee </h1>
        <button onClick={openBtn} className="bg-blue-400 w-[120px] sm:text-[16px] text-[20px] sm:w-[100px] h-[50px] sm:h-[40px] mt-[10px] sm:mt-[5px] rounded-[10px] text-white hover:bg-transparent hover:border-2 hover:border-white"> Add note</button>
    </div>
    { isOpen == true ? <Form  close={closeBtn} /> : " " }
    </div>
}
export default Header 