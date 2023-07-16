import Card from './Card.jsx'

function name(params) {
    
}
const courses = () => {

    let crs = [
        "Learn how to build complex web application using languages like JavaScript and it's libraries",
        "Learn to develop responsive web application using client and server side programming languages.",
        "Create complex enterprise software, ensure reliable software integration, modernise your negative system",
        "Get hands on experience on all aspects of a product's development, including design, usability, function, and even branding and marketing.",
        "Learn how to create Dapps or decentralized applications. Also design, implement, and distribute a secure blockchain-based network.",
        "Work with big data, Create algorithms to design AI/ML models, perform data analysis, processing and statistical models.",
        "Learn to defend against cyber attacks, identify potential security threats, and implement effective defense strategies with our comprehensive Cybersecurity Bootcamp.",
        "Learn the essential skills and frameworks needed to manage a successful product, from ideation to launch, in a comprehensive Product Management Bootcamp.",
        "Learn the foundational knowledge, best practices, and tools necessary to effectively plan, execute, and manage projects of all sizes in a comprehensive Project Management Bootcamp.",
        "Learn how to plan, design, and execute effective software tests using industry-standard methodologies and tools in a comprehensive Software Testing Bootcamp.",
        "Learn how to effectively communicate complex technical information to a specific audience through clear and concise technical writing techniques.",
        "Learn the essential skills and strategies of digital marketing with our comprehensive online course, covering SEO, social media marketing, email marketing, and more."

    ]
    return (<>
        <div className="text-center text-4xl font-bold pt-5 pb-3 mt-5 text-[#1b2248]">Courses</div>
        <div className="text-center px-2 pb-3">We have varieties of courses available at your disposals of either the weekend or weekdays sessions in order to suit your schedules</div>

        <div className="cards flex flex-col sm:grid md:grid-cols-3 sm:grid-cols-2 gap-5 p-4 ">
            <Card name='Front or Backend Development' info={crs[0]}/>
            <Card name='Mobile Development' info={crs[1]}/>
            <Card name='FullStack' info={crs[2]}/>
            <Card name='UI/UX' info={crs[3]}/>
            <Card name='BlockChain Development' info={crs[4]}/>
            <Card name='Data Science/Machine Learning' info={crs[5]}/>
            <Card name='Cyber Security' info={crs[6]}/>
            <Card name='Product Management' info={crs[7]}/>
            <Card name='Project Management' info={crs[8]}/>
            <Card name='Software Testing' info={crs[9]}/>
            <Card name='Technical Writing' info={crs[10]}/>
            <Card name='Digital Marketing' info={crs[11]}/>
        </div>
    </>)

}

export default courses
