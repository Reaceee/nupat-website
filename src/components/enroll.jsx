import cover from '../assets/Images/Picwithglass.jpg'

const Enroll = () => {
    let enroll_text = `
    NUPAT TECHNOLOGIES is an intensive practical software
    development boot-camp that is ushering in a new generation of
    indigenous software developers driving innovation and software
    development in the information and technological industry. The
    training utilizes the experience and skill sets of veterans in the
    industry. Quality practical training and online resources are used
    in a conducive, team building and challenging environment to
    inspire and mold the interns to become great tech experts.
    `
    return(
        <>
        <div className="mt-4 md:mt-12 bg-[#1b2248] text-white p-10 pb-7 md:flex justify-between items-start">
            <div className=" w-full md:w-[40%]">
                <p className="text-4xl font-['quicksand'] font-bold">Nupat Code Camp</p>
                <p className="py-6 text-justify ">{enroll_text}</p>
                <button className="bg-[#fff] md:mt-8 font-['quicksand'] font-semibold text-[#1b2248] px-2 py-3 rounded-md">Enroll Now</button>
            </div>

            <img src={cover} className="img md:w-1/2 w-full sm:h-[350px] h-[250px] rounded-2xl mt-8 md:mt-0"/>
        </div>
        </>
    )
}

export default Enroll