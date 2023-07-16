import Vid1 from '../assets/Videos/Meet_Ib.mp4'
import Vid2 from '../assets/Videos/Meet_Joy.mp4'

const Testimonials = () => {
    return (
        <>
        <p className="text-[#1b2248]  pt-8 font-bold text-3xl text-center">Testimonials</p>
        <p className="text-center text-xl px-9 py-4">Listen to the experiences of our students</p>

        <div className="flex flex-col md:flex-row p-7 gap-7 items-start justify-center">
            <video src={Vid2} controls alt="" className=' rounded-md ring-1 bg-[#1b2248] h-1/3 sm:h-[350px] w-full md:-w-[45%] aspect-[1/1.1] '></video>
            <video src={Vid1} controls alt="" className=' rounded-md ring-1 bg-[#1b2248] h-1/3 sm:h-[350px] w-full md:-w-[45%] aspect-[1/1.1] '></video>
        </div>
    </>
    )
};

export default Testimonials;