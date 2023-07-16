import display from '../assets/Images/firstDisplay3.jpg'

const IT = () => {
    return (
        <>
    <div className="ITServ md:flex justify-between">
    <div className="md:max-w-[50%] mt-8 md:mt-12">
                <p className="text-3xl sm:text-4xl text-[#1b2248] sm:font-semiboldtext-[#1b2248] px-5">IT Services</p>
                <p className='py-10 px-5 text-justify sm:text-xl' style={{ lineHeight: '35px' }}>We offer technological solutions ranging from building website to building both web and mobile applications. We also have a pool of developers, Designers, Data Analysts for outsourcing.</p>
                <button className="bg-[#1b2248] mx-5 text-white px-3 py-4 rounded-md -mt-5">Join US</button>
            </div>
            <div className="md:flex md:w-[50%] mt-4 w-[100%] md:flex-col md:items-end">

                <div className="w-[100%] overflow-x-hidden px-4">
                    <div className="ITS bg-gray-200 bg-cover h-[300px] md:h-[450px] rounded-xl w-[100%]"></div>
                </div>
            </div>
    </div>
        </>
    )
}

export default IT
