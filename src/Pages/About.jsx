import { Link } from "react-router-dom"
let x = '=>'



const About = () => {
    return(
        <>
            This is the About Page
            <Link to="../" className="re bg-[#11b7ac] text-white p-2 mt-7 flex items-center justify-center w-max rounded-full font-['Fira Code'] font-extrabold"> Go to Home </Link>
        </>
    )
}

export default About