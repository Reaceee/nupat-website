import MeetCard from './MeetCard.jsx'
import CEO from '../assets/Images/ceo.JPG'
import CTO from '../assets/Images/cto.JPG'
import paulo from '../assets/Images/paulo.JPG'
import manager from '../assets/Images/manager.JPG'

const Meet = () => {
    return (
            <div className="flex flex-col mt-6 sm:grid md:grid-cols-2 lg:grid-cols-4 p-4 bg-[#1b2248]">
            <MeetCard img={CEO} name="Nnamdi Ugwu" title="CEO"/>
            <MeetCard img={CTO} name="Chibuike Ugwu" title="CTO"/>
            <MeetCard img={paulo} name="Olanrewaju Paul" title="COO"/>
            <MeetCard img={manager} name="Ogunfunmilade Ibukun" title="Brand Manager"/>
            </div>

    );
};

export default Meet;