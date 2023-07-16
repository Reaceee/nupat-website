import logo from '../../src/assets/Images/Logo.svg'
import Hamb from '../../src/assets/Images/Hamburger.svg'
// import Link from 'react-router-dom'



const Header = () => {
    return (
        <>
            <div className="nav w-[100%] h-[17vh] bg-[#1b2248] flex justify-between items-center">
                <img className=" sm:h-15 h-24 ml-4 sm:ml-14" src={logo} alt="Logo" />

                <img className="h-10 mr-10 sm:hidden cursor-pointer" src={Hamb} alt="Hamb" onClick={showMenu} />

                <div className="hidden sm:flex items-center mr-[5rem]">
                    <ul className='flex gap-4 items-start'>
                        <li className='text-lg text-center focus'>Home</li>
                        <li className='text-white md:text-lg text-sm text-center'>About Us</li>
                        <li className='text-white md:text-lg text-sm text-center'>Code Camp</li>
                        <li className='text-white md:text-lg text-sm text-center' onClick={go_to_IT}>IT Services</li>
                        <li className='text-white md:text-lg text-sm text-center pr-3'>Nupat Initiatives</li>
                    </ul>
                    <button className="bg-white px-[10px] py-5 rounded-md" >Join Us</button>
                </div>
            </div>
        </>
    )
}
export default Header