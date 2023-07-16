import logo from '../assets/Images/Logoo.svg'
import facebook from '../assets/Images/Facebook-icon.svg'
import linkedin from '../assets/Images/Linkedin.svg'
import instagram from '../assets/Images/Insta-icon.svg'
import twitter from '../assets/Images/twitter-icon.svg'
<div className="w-10 h-10 flex items-center justify-center text-center bg-blue-500 text-white text-[25px] font-['geometr415 blk bt'] pt-1 font-bold rounded-[50%]">f</div>




const Footer = () => {
    return (
        <>
            <div className="flex md:flex-row flex-col w-full justify-center md:justify-between items-center">
                <img src={logo} alt="" />
                <div className="md:text-left md:grid md:grid-cols-3 md:gap-5 h-max md:w-1/3 gap-7 flex flex-col w-full justify-center text-center">
                    <div className="h-full cursor-pointer hover:text-blue-400 transition]">Contact Us </div>
                    <div className="h-full cursor-pointer hover:text-blue-400 transition]">Nupat Initiative </div>
                    <div className="h-full cursor-pointer hover:text-blue-400 transition]">Codecamp </div>
                    <div className="h-full cursor-pointer hover:text-blue-400 transition]">IT Services </div>
                    <div className="h-full cursor-pointer hover:text-blue-400 transition]">About Us </div>
                    <div className="h-full cursor-pointer hover:text-blue-400 transition]">Leadership </div>
                </div>


                <div className=" md:w-1/3 flex flex-col md:p-0 pt-7 md:gap-3 md:pr-12 gap-7 w-full justify-center text-center">
                    <p className="text-center" >46, Commmunity Road Akoka Lagos </p>
                    <p className="text-center" >Contact +2349126803449 +2348039283302</p>

                    <div className="Socials flex w-full md:justify-ceter justify-center gap-6">
                        <div className="w-7 h-7 min-w-10 min-h-10 flex items-center justify-center text-center bg-blue-500 text-white text-[25px] font-['geometr415 blk bt'] font-bold rounded-[50%] cursor-pointer text-md pt-1">f</div>
                        <img src={linkedin} alt=""  className='w-7 cursor-pointer'/>
                        <img src={instagram} alt="" className='w-7 cursor-pointer'/>
                        <img src={twitter} alt="" className='w-7 cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className="Footer bg-[#1b2248] text-white text-lg px-7 py-12 text-center mt-[7rem]">
                Copyright © 2022 NUPAT TECHNOLOGIES LIMITED. All Rights Reserved
            </div>
        </>
    )
}

export default Footer