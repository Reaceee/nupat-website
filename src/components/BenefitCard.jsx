const BenefitCard = (props) => {
    return (
        <div className="benefitCard w-full bg-white flex flex-col items-center text-center shadow-lg shadow-[#0000004e] px-8 pb-14 pt-5 rounded-lg">
            <img src={props.img} alt="icon" className="mb-6 self-end w-[60px]" />
            <div className="w-max px-5 text-white font-['quicksand'] font-bold py-2 -mb-5 z-10 ml-3 cursor-default self-start bg-[#1b2248] rounded-full text-lg "> ⁙ {props.name}</div>
            <div className=" font-['quicksand'] text-[#1b2248] w-full ring-1 cursor-default ring-[#1b2248] rounded-lg text-lg py-10 px-4 h-full flex items-center"> {props.info}</div>
        </div>
    )
}

export default BenefitCard;