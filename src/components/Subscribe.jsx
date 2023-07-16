const Subscribe = () => {
    return (
        <>
            <div className="p-5 cursor-default flex flex-row sm:flex-row justify-center">
                <div className="my-6 md:w-2/3 w-full rounded-md bg-[#1b2248] flex flex-col items-end py-10 sm:flex-row ">

                    <div className="w-full">
                        <p className="-ml-3 border-l-4 border-l-[#1b2248] text-[#1b2248] self-start px-5 p-5 shadow-lg shadow-[#0000006f] font-bold bg-white w-max text-2xl font-['quicksand'] tracking-wide rounded-r-full">Subscribe</p>
                        <p className=" text-white w-full px-5 pt-5">Join our community and get the latest information about our products and services.</p>
                    </div>

                    <div className="w-full p-4 ">
                        <form className="w-full flex h-max justify-between ring-white ring-1 rounded-md overflow-hidden">
                            <input type="email" className="px-5 outline-none w-4/5  bg-[#00000000] text-white" placeholder="Your Email Address" />
                            <button type="submit" className="outline-none px-3 font-semibold font-[quicksand] text-[#1b2248] bg-white p-3 ">Join Us</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Subscribe;