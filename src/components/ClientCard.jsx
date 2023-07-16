const ClientCard = (props) => {
    return (
            <div className="clientCard md:w-1/2 bg-[#1b2248] rounded-md flex flex-col items-center p-10">
                <img src={props.img} alt="" className="w-1/4 rounded-full bg-slate-300 aspect-square ring-1 ring-white mt-16" />
                <p className="text-center text-yellow-400 pt-9">{props.comment}</p>
                <p className="text-center text-white text-2xl w-max pb-10 font-bold">{props.name}</p>
            </div>
    )
};

export default ClientCard;