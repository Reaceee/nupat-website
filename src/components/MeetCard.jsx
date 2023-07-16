const MeetCard = (props) => {
    return(
        <div className="MeetCard w-full bg-[#1b2248] flex flex-col items-center py-10">
           <img src={props.img} alt="" className="w-[300px] rounded-2xl"/>
           <p className="text-white pt-5 text-center ">{props.name}</p>
            <p className="text-white pb-2 text-center text-xl font-bold">{props.title}</p>
        </div>
    )
};

export default MeetCard;