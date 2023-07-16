import Card from './BenefitCard.jsx'
import icon1 from '../assets/Images/mentor.jpg'
import icon2 from '../assets/Images/community.png'
import icon3 from '../assets/Images/portfolio.jpg'
import icon4 from '../assets/Images/internship.jpg'
import icon5 from '../assets/Images/masterclass.png'
import icon6 from '../assets/Images/excellence.jpg'

const Benefits = () => {
    let all_benefits = [
        'We provide the best programs structured with diverse and brilliant mentors that put all their efforts and skills to positively influece, shape and reshape the mindset of interns to prepare them for service.',
        "The environment is conducive and encompass diverse developers from different stacks and areas of the tech community.",
        "During the course of the internship program, the designed curriculum will enable them to work on live project and also place them on an internship accross reknowned organizations and this in turn builds their prowess and portfolios.",
        "We offer internship programms that covers a wide range of courses such as UI/UX, backend(.NET, C#, nodejs), frontend, fullstack, mobile software dev(flutter, dart, react native) blockchain technology, data science and machine leaerning, data analysis.",
        "With the program structure at NUPAT, a one-day per-week master class is designed to educate interns/students on values, ethics and complexities that influence success in their world as a tech person.",
        "At NUPAT TECHNOLOGIES we have a perception of what your imagination is, and we exceed the limit with excellence.",
    ]
    return (
        <>
            <p className="text-[#1b2248]  pt-8 font-bold text-2xl md:text-4xl text-center">Benefits of working with us</p>
            <p className="md:text-center text-lg md:text-2xl md:px-20 px-9 py-4 text-justify font-['quicksand']">We have varieties of courses available at your disposals for eitherthe weekdays or weekend sessions in order to suit your schedules.</p>
            <div className="benefitCards p-5 flex flex-col gap-6 sm:grid md:grid-cols-2 lg:grid-cols-3 ">
                <Card img={icon1} name='Mentorship' info={all_benefits[0]}/>
                <Card img={icon2} name='Community' info={all_benefits[1]}/>
                <Card img={icon3} name='Portfolio' info={all_benefits[2]}/>
                <Card img={icon4} name='Internship' info={all_benefits[3]}/>
                <Card img={icon5} name='Masterclass' info={all_benefits[4]}/>
                <Card img={icon6} name='Excellence' info={all_benefits[5]}/>
            {/* <Card img={icon1} name='!' info="Reaceful Creation"/> */}
            </div>
        </>
    )
}

export default Benefits;