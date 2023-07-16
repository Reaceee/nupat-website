import Back from '../assets/Images/back.svg'
// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const Sidebar = () => {
    return(
<>
<div className="sidebarPad invisible flex sm:hidden fixed top-0 left-0 h-full w-full z-[1000]">
            <div className="SideBar h-full w-2/3 z-[999] bg-white left-0">
                <img src ={Back} onClick={hideMenu} className="w-[25px] mt-8 ml-8 cursor-pointer"/>

                <div className="pt-12 px-10">
                    <div className=" py-4 font-['quicksand'] transition-ease-out text-xl font-extrabold text-[#26dbc3] text-semibold cursor-pointer border-b-[4px] border-b-solid border-b-[#26dbc3]">Home</div>
                    {/* <div className="FocusPage pt-4 font-['quicksand'] hover:p-6 hover:duration-[.65s] transition-ease-out hover:text-[#26dbc3] text-semibold cursor-pointer">Home</div> */}
                    <div className="pt-4 font-['quicksand'] hover:p-6 hover:duration-[.65s] transition-ease-out hover:text-[#26dbc3] text-semibold cursor-pointer">About Us</div>
                    <div className="pt-4 font-['quicksand'] hover:p-6 hover:duration-[.65s] transition-ease-out hover:text-[#26dbc3] text-semibold cursor-pointer">Code Camp</div>
                    <div className="pt-4 font-['quicksand'] hover:p-6 hover:duration-[.65s] transition-ease-out hover:text-[#26dbc3] text-semibold cursor-pointer">IT Services</div>
                    <div className="pt-4 font-['quicksand'] hover:p-6 hover:duration-[.65s] transition-ease-out hover:text-[#26dbc3] text-semibold cursor-pointer">Nupat Initiatives</div>
                </div>
                </div>
            <div className="w-1/2 bg-[#00000062] h-full" onClick={hideMenu}></div>
        </div>
</>
    )
}

export default Sidebar