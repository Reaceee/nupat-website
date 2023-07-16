import image from '../assets/Images/logoIcon.png'
// import { RiApps2Fill } from 'react-icons'


<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a2 2 0 012-2h6a2 2 0 012 2v12l-5-3-5 3V3z" clip-rule="evenodd"></path></svg>
const card = (props) => {
    return (<>
        <div className="card p-10 w-full flex flex-col justify-start gap-10 md:pb-40 rounded-md shadow-gray-400 shadow-lg items-center ">
            <img src={image} draggable='false' alt="" width={'40px'} />
            <p className='text-xl font-semibold font-["quicksand"] text-center'>{props.name}</p>
            <p className='text-gray-400 font-["quicksand"] text-center'>{props.info}</p>
            <div className=""></div>
        </div>
    </>)

}
export default card