function Form ({close}){
    return <div className="bg-black bg-opacity-[50%] absolute w-full h-screen top-0">

     <div className=" top-0">
        <div className="bg-blue-400 w-[350px] ml-[20px] sm:ml-[350px] mt-[100px] sm:mt-[70px] rounded-[20px] h-[350px]">
            <div className="flex justify-around relative">
            <h1 className="text-white ml-[20px] text-[30px] text-center font-semibold"> Fill this Form</h1>
            <i onClick={close} class="fa-solid fa-xmark absolute right-3 top-15 mt-[10px] text-green-800  text-[25px]"></i>
            </div>
            <form className="px-[20px] mt-[-10px] pt-[20px]">
                <input className="w-[300px] h-[30px] hover:bg-blue-50 p-[8px] rounded-[8px]"  type="text" placeholder="Enter title" />
                <textarea className="w-[300px] mt-[10px] hover:bg-blue-50 h-[180px] rounded-[8px] text-[16px] p-[8px]"  placeholder="Write a message " ></textarea>
                <button className="w-[300px] h-[40px] hover:bg-white hover:text-black bg-green-600 text-white text-[18px] font-semibold mt-[10px] rounded-[8px]"> Save </button>
            </form>
        </div>
    </div>
    </div>
}
export default Form