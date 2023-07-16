import ClientCard from '../components/ClientCard.jsx';
import imgOne from '../assets/Images/clientTwo.jpeg'
import imgTwo from '../assets/Images/client3.jpeg'

const Clients = () => {
    return (
        <>
            <p className="text-[#1b2248]  pt-8 font-bold text-3xl text-center">What Our Clients are saying</p>
            <p className="text-center text-xl px-9 py-4">Feedbacks from our clients, why wouldn’t you want to work with us.</p>

            <div className="flex flex-col md:flex-row p-7 gap-7">
                <ClientCard img={imgTwo} name="Augustine Aguworumba" comment="Its been a lovely time working with Nupat Technologies" />
                <ClientCard img={imgOne} name="Adegunwa Fisola" comment="The teaching style and services they provide is top notch" />

            </div>
        </>
    )
}
export default Clients