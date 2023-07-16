const Hero = () => {
    return (
        <>
        <div className="p-6 sm:flex sm:items-center sm:justify-between">
            <div className="sm:max-w-[40%]">
                <p className="text-3xl sm:text-5xl sm:font-bold text-[#1b2248] ml-1">INNOVATION AT IT'S PEAK</p>
                <p className='py-3 pt-5' style={{ lineHeight: '35px' }}>We are raising world class professionals, building problem solving innovations and helping you bring your dreams to realities</p>
                <button className="bg-[#1b2248] text-white px-3 py-4 rounded-md mt-6">Join US</button>
            </div>
            <div className="sm:flex sm:w-[50%] sm:mt-0 mt-4 w-[100%] sm:flex-col sm:items-end">

                <div className="w-[100%] overflow-x-hidden">
                <div className="carousel bg-gray-200 h-[250px] sm:h-[350px] rounded-xl w-[100%]"></div>
                </div>
                <div className="sm:max-w-[450px] sm:w-[70%] sm:mt-[-2rem] mt-4 p-4 flex bg-[#1b2248] rounded-lg sm:rounded-tl-lg sm:rounded-br-lg sm:rounded-none z-40">
                    <div className="w-[100%] p-4 sm:p-2 bg-white">
                        <div className="bg-[#fff] w-[100%] h-12 flex ">
                            <input type="text" className="outline-none w-[100%] sm:border-none border-[1px] border-black border-l-[none] px-4" placeholder="Send us a message" />
                            <button className="bg-[#1b2248] sm:rounded-md rounded-tr-md rounded-br-md text-white p-4 flex items-center">Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
            <div className="w-[100%] z-[1] bg-[#1b2248] p-8 sm:flex items-center justify-around opacity-50 hidden ">
                <div className="text-white w-max">1000+ Students</div>
                <div className="text-white w-max">14+ Courses</div>
                <div className="text-white w-max">100+ Clients</div>
            </div>

            </>

    )
}

export default Hero